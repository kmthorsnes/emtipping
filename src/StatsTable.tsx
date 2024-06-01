import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCSVData } from "./api.hooks";

const StatsTable = () => {
  const { data, isFetching } = useSuspenseQuery({
    queryKey: ["stats"],
    queryFn: fetchCSVData,
  });
  if (isFetching) {
    return <div>Henter saker og ting fra excel..</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Navn</th>
            <th>Totalt</th>
            <th>s1</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.SpillerID}>
              <td>{d.SpillerID}</td>
              <td>{d.Spillernavn}</td>
              <td>{d.TotaltPoeng}</td>
              <td>{d.SpillerID}</td>
              <td>{d.s1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
