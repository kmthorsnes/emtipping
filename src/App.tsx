import { QueryErrorResetBoundary } from "@tanstack/react-query";
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
              <StatsTable />
            <Footer />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
}

export default App;
