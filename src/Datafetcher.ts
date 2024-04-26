import { useEffect, useState } from "react";
import axios from "axios";

export interface CsvData {
  ID: string;
  Tittel: string;
  Navn: string;
  Versjon: number;
  Pris: number;
  Tall: number;
}

export function useFetchCSVData() {
  const [csvData, setCsvData] = useState<CsvData[]>([]);

  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = () => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/1LmJlxkZDyNUoERqAIw5G70g7fIdE8yyjJCFYNYcoU2s/pub?output=csv";

    axios
      .get(csvUrl)
      .then((response) => {
        const parsedCsvData = parseCSV(response.data);
        setCsvData(parsedCsvData);
        console.log(parsedCsvData);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  function parseCSV(csvText: string): CsvData[] {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(",");
    const data: CsvData[] = [];

    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(",");
      const rowObject: CsvData = {
        ID: "",
        Tittel: "",
        Navn: "",
        Versjon: 0,
        Pris: 0,
        Tall: 0,
      };

      for (let j = 0; j < headers.length; j++) {
        switch (headers[j]) {
          case "ID":
            rowObject.ID = rowData[j];
            break;
          case "Tittel":
            rowObject.Tittel = rowData[j];
            break;
          case "Navn":
            rowObject.Navn = rowData[j];
            break;
          case "Versjon":
            rowObject.Versjon = Number(rowData[j]);
            break;
          case "Pris":
            rowObject.Pris = Number(rowData[j]);
            break;
          case "Tall":
            rowObject.Tall = Number(rowData[j]);
            break;
        }
      }

      data.push(rowObject);
    }

    return data;
  }
  console.log(csvData);
  return csvData;
}
