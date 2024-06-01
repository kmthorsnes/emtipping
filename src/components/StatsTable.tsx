import React from "react";
import { CsvData } from "../api/api.model";

type Props = {
  data: CsvData[] | undefined;
  onRowClicked: (spillerId: string) => void;
};

const StatsTable = ({ data, onRowClicked }: Props) => {
  return (
    <React.Suspense fallback={<p>Laster inn resultater...</p>}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Navn</th>
            <th>Totalt</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => (
            <tr onClick={() => onRowClicked(d.SpillerID)} key={d.SpillerID}>
              <td>{d.SpillerID}</td>
              <td>{d.Spillernavn}</td>
              <td>{d.TotaltPoeng ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Suspense>
  );
};

export default StatsTable;
