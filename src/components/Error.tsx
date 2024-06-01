import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import {
  ErrorComponent,
  ErrorComponentProps,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

export function EmTippingErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  useEffect(() => {
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  if (error instanceof Error) {
    return (
      <div>
        <h2>Oopps..</h2>
        {error.message}
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() => {
          reset();
          router.invalidate();
        }}
      >
        Prøv igjen
      </button>
      <ErrorComponent error={error} />
    </div>
  );
}
