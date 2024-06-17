import React from "react";
import { CsvData } from "../api/api.model";

type Props = {
  data: CsvData[] | undefined;
  onRowClicked: (spillerId: string) => void;
};

type ResultColor = "green" | "yellow" | "red" | "grey";

function getColorFromPoeng(p: number): ResultColor {
  switch (p) {
    case 3:
      return "green";
    case 1:
      return "yellow";
    case 0:
      return "red";
    default:
      return "grey";
  }
}

const StatsTable = ({ data, onRowClicked }: Props) => {
  return (
    <React.Suspense fallback={<p>Laster inn resultater...</p>}>
      <table>
        <thead>
          <tr>
            <th style={{ paddingRight: "1rem" }}>#</th>
            <th style={{ textAlign: "left" }}>Navn</th>
            <th>Totalt</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d, i) => (
            <tr onClick={() => onRowClicked(d.SpillerID)} key={d.SpillerID}>
              <td style={{ paddingRight: "1rem" }}>{i + 1}</td>
              <td style={{ textAlign: "left" }}>{d.Spillernavn}</td>
              <td>{d.Totalt ?? 0}</td>
              {d.Runder.map((r, i) => {
                return (
                  <td
                    className={`result ${getColorFromPoeng(r)}`}
                    key={`statsrow_${i}`}
                  >
                    {r}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Suspense>
  );
};

export default StatsTable;
