import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import { CsvData } from "./api.model";

export const fetchCSVData = async () => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vScEnNg6slwAkrrFsxgtrUKdQSjKWsxRirJyFEOfo1HaKCzNb2KbtUKiKkvZtEY7PlXo-_5tIxPF958/pub?gid=542984168&single=true&output=csv";

  const response = await axios.get(csvUrl);
  return parseCSV(response.data);
};

export const allPlayerStatsQueryOptions = queryOptions({
  queryKey: ["stats"],
  queryFn: fetchCSVData,
});

function parseCSV(csvText: string): CsvData[] {
  const rows = csvText.split(/\r?\n/);
  const headers = rows[0].split(",") as Array<keyof CsvData>;

  const data = rows.slice(1).map((row) =>
    row.split(",").reduce((a, v, i) => {
      const key = headers[i];
      if (key === "Spillernavn" || key === "SpillerID") {
        return { ...a, [key]: v };
      }
      if (key === "Totalt") {
        return { ...a, Totalt: Number(v) };
      }
      if (matchesRoundCol(key)) {
        const parsedNumber = Number(v);
        if (!isNaN(parsedNumber)) {
          return { ...a, Runder: [...(a.Runder ?? []), parsedNumber] }; //a.Runder.push(Number(v))
        }
      }
      return { ...a };
    }, {} as CsvData)
  );
  return data;
}

/**
 * @description returnerer true hvis en kolonne-header starter med s1, s2...sN
 */
function matchesRoundCol(col: string): boolean {
  const regex = /^[s]{1}\d/g;
  return regex.test(col);
}

/* function sort(data: CsvData[], sortKey: keyof SortableCsv) {
  return data.sort((a, b) => b[sortKey] - a[sortKey]);
} */
