import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { allPlayerStatsQueryOptions } from "../api/api.hooks";
import Fifa98Banner from "../assets/fifa-98-banner.png";
import { EmTippingErrorComponent } from "../components/Error";
import StatsTable from "../components/StatsTable";
import SuspenseWrapper from "../components/SuspenseWrapper";

export const Route = createFileRoute("/")({
  /*   loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(playerStatsQueryOptions), */
  component: IndexPage,
  errorComponent: EmTippingErrorComponent,
});

function IndexPage() {
  const navigate = useNavigate();
  const { data, isFetching } = useSuspenseQuery(allPlayerStatsQueryOptions);
  return (
    <div>
      <img className="banner" src={Fifa98Banner} />
      <h1 className="fifa-font">EM-tipping 2024</h1>
      {isFetching && (
        <p>
          Venter tålmodig på at ting skal lastes inn fra Kalle sitt excel-ark
        </p>
      )}
      <SuspenseWrapper>
        <StatsTable
          data={data}
          onRowClicked={(id) =>
            navigate({
              to: "/resultater/$spillerId",
              params: { spillerId: id },
            })
          }
        />
      </SuspenseWrapper>
    </div>
  );
}
