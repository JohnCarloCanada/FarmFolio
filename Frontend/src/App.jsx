import { FarmFolioProvider } from "./context/FarmFolioContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { CropsInfo, Layout, Loader, Missing } from "./components";
import { Crops, Home, Team, NewlyReleased } from "./pages";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Crops">
          <Route index element={<Crops />} />
          <Route path="/Crops/:id" element={<CropsInfo />} />
        </Route>

        <Route path="/Team" element={<Team />} />
        <Route path="/NewlyReleased" element={<NewlyReleased />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FarmFolioProvider>
          <Suspense fallback={<Loader />}>
            <LocationProvider>
              <RoutesWithAnimation />
            </LocationProvider>
          </Suspense>
        </FarmFolioProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
