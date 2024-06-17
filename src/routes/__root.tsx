import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import Footer from "../components/Footer";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: Layout,
    notFoundComponent: () => <p>404...Fant ikke denne siden </p>,
  }
);

function Layout() {
  return (
    <div className="layout">
     {/*  <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
}
