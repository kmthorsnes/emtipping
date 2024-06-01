import { QueryErrorResetBoundary } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "./Footer";
import Header from "./Header";
import StatsTable from "./StatsTable";

function App() {
  return (
    <div className="layout">
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                Noe gikk fryktelig galt her.. Kalle har skylda
                <button onClick={() => resetErrorBoundary()}>Prøv igjen</button>
                <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
              </div>
            )}
            onReset={reset}
          >
            <Header />
            <React.Suspense fallback={<p>Laster inn resultater...</p>}>
              <StatsTable />
            </React.Suspense>
            <Footer />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
}

export default App;
