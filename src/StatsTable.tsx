import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCSVData } from "./api.hooks";
import React from "react";

const StatsTable = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["stats"],
    queryFn: fetchCSVData,
  });

  return (
    <React.Suspense fallback={<p>Laster inn resultater...</p>}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Navn</th>
            <th>Totalt</th>
            <th>s1</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.SpillerID}>
              <td>{d.SpillerID}</td>
              <td>{d.Spillernavn}</td>
              <td>{d.TotaltPoeng}</td>
              <td>{d.s1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Suspense>
  );
};

export default StatsTable;
