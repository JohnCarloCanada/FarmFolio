import { Navbar, Hero } from "./components";
import { FarmFolioProvider } from "./context/FarmFolioContext";

function App() {
  return (
    <>
      <FarmFolioProvider>
        <Navbar />
        <Hero />
      </FarmFolioProvider>
    </>
  );
}

export default App;
