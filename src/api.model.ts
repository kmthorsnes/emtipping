export interface CsvData {
  SpillerID: number;
  Spillernavn: string;
  TotaltPoeng: number;
  s1: number;
  s2: number;
  s3: number;
}

export type SortableCsv = Pick<CsvData, "SpillerID" | "TotaltPoeng">;
