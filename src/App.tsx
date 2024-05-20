import "./App.css";
import { useFetchCSVData, CsvData } from "./Datafetcher";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const csvData: CsvData[] = useFetchCSVData();
  const sortedCsvData = [...csvData].sort((a, b) => b.Versjon - a.Versjon);

  return (
    <>
      {/* TODO: Få inn et grid-system her */}
      <Header />
      {sortedCsvData.map((data, index) => (
        <div key={index}>
          <p>ID: {data.ID}</p>
          <p>Tittel: {data.Tittel}</p>
          <p>Navn: {data.Navn}</p>
          <p>Versjon: {data.Versjon}</p>
          <p>Pris: {data.Pris}</p>
          <p>Tall: {data.Tall}</p>
          <p>-----</p>
        </div>
      ))}
      <Footer/>
    </>
  );
}
export default App;
