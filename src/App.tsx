import "./App.css";
import { useFetchCSVData, CsvData } from './Datafetcher';
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const csvData: CsvData[] = useFetchCSVData();
  console.log(csvData); // This will log the data to the console

  const sortedCsvData = [...csvData].sort((a, b) => b.SpillerID - a.SpillerID);


  return (
    <>
      {/* TODO: Få inn et grid-system her */}
      <Header />
      {sortedCsvData.map((data, index) => (
        <div key={index}>
          <p>ID: {data.SpillerID}</p>
          <p>Navn: {data.Navn}</p>
          <p>Totalt: {data.TotaltPoeng}</p>
          <p>s1: {data.s1}</p>
          <p>-----</p>
        </div>
      ))}
      <Footer/>
    </>
  );
}
export default App;
