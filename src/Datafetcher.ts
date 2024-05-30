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
  const headers = rows[0].split(",") as Array<keyof CsvData>;

  const data = rows.slice(1).map((row) =>
    row.split(",").reduce((a, v, i) => {
      const key = headers[i];
      if (key === "Spillernavn") {
        return { ...a, [key]: v };
      }
      return { ...a, [key]: Number(v) };
    }, {} as CsvData)
  );
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
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    };

    fetchCSVData();
  }, []);

  return csvData;
};
