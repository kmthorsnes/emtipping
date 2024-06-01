import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resultater")({
  component: ResultaterPage,
});

function ResultaterPage() {
  return (
    <div>
      <h1>Resultater</h1>
      <p>Her kommer det mer</p>
    </div>
  );
}

export default ResultaterPage;
