import { Navbar, Hero, OurTeam, Footer } from "./components";
import { FarmFolioProvider } from "./context/FarmFolioContext";

function App() {
  return (
    <>
      <FarmFolioProvider>
        <Navbar />
        <Hero />
        <OurTeam />
        <Footer />
      </FarmFolioProvider>
    </>
  );
}

export default App;
