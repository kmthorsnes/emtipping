import { useEffect, useState } from "react";
import axios from "axios";

export interface CsvData {
  SpillerID: number;
  Spillernavn: string;
  TotaltPoeng: number;
  s1: number;
  s2: number;
  s3: number;
}

const parseCSV = (csvText: string): CsvData[] => {
  const rows = csvText.split(/\r?\n/);
  const headers = rows[0].split(",");
  const data: CsvData[] = [];
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(",");
    const rowObject = {} as CsvData;
    for (let j = 0; j < headers.length; j++) {
      if (headers[j] === "SpillerID") {
        rowObject[headers[j] as keyof CsvData] = Number(rowData[j]);
      } else if (headers[j] === "Spillernavn") {
        // Don't parse string fields
        rowObject[headers[j] as keyof CsvData] = rowData[j];
      } else {
        // Replace all commas with periods before parsing number fields
        const numberData = rowData[j].replace(/,/g, ".");
        rowObject[headers[j] as keyof CsvData] = parseFloat(numberData);
      }
    }
    data.push(rowObject);
  }
  return data;
};

export const useFetchCSVData = (): CsvData[] => {
  const [csvData, setCsvData] = useState<CsvData[]>([]);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vScEnNg6slwAkrrFsxgtrUKdQSjKWsxRirJyFEOfo1HaKCzNb2KbtUKiKkvZtEY7PlXo-_5tIxPF958/pub?gid=542984168&single=true&output=csv";

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

    fetchCSVData();
  }, []);

  return csvData;
};
