export interface CsvData {
  SpillerID: string;
  Spillernavn: string;
  Totalt: number;
  Runder: number[];
}

export type SortableCsv = Pick<CsvData, "SpillerID" | "Totalt">;
