import { FarmFolioProvider } from "./context/FarmFolioContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout, Loader, Missing } from "./components";
import { Crops, Home, Team } from "./pages";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Crops" element={<Crops />} />
        <Route path="/Team" element={<Team />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <>
      <FarmFolioProvider>
        <Suspense fallback={<Loader />}>
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
        </Suspense>
      </FarmFolioProvider>
    </>
  );
}

export default App;
