import "./App.css";
import { useFetchCSVData } from "./Datafetcher";

function App() {
  const csvData = useFetchCSVData();
  const sortedCsvData = [...csvData].sort((a, b) => b.Versjon - a.Versjon);

  return (
    <>
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
    </>
  );
}
export default App;
