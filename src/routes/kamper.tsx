import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kamper")({
  component: KamperPage,
});

function KamperPage() {
  return (
    <div>
      <h1>Kamper</h1>
    </div>
  );
}
