import { FarmFolioProvider } from "./context/FarmFolioContext";
import { Routes, Route } from "react-router-dom";
import { Layout, Missing } from "./components";
import { Crops, Home, Team } from "./pages";
import { Suspense } from "react";

function App() {
  return (
    <>
      <FarmFolioProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/Crops" element={<Crops />} />
              <Route path="/Team" element={<Team />} />
              <Route path="*" element={<Missing />} />
            </Route>
          </Routes>
        </Suspense>
      </FarmFolioProvider>
    </>
  );
}

export default App;
