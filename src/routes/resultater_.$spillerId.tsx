import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { allPlayerStatsQueryOptions } from "../api/api.hooks";

export const Route = createFileRoute("/resultater/$spillerId")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(allPlayerStatsQueryOptions),
  component: PlayerDetails,
});

function PlayerDetails() {
  const { data } = useSuspenseQuery(allPlayerStatsQueryOptions);
  const { spillerId } = Route.useParams();
  const spiller = data.find((d) => d.SpillerID === spillerId);

  return (
    <div>
      <h1>Scores: {spiller?.Spillernavn}</h1>
      <p>Totalt: {spiller?.TotaltPoeng}</p>
      <p>Her kommer det mer</p>
    </div>
  );
}
