import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              Noe gikk galt :(
              <button onClick={() => resetErrorBoundary()}>
                Prøv å last inn på nytt
              </button>
            </div>
          )}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default SuspenseWrapper;
