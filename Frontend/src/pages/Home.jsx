import { Hero } from "../components";
import useSetTitle from "../hooks/useSetTitle";

const Home = () => {
  useSetTitle("FarmFolio");
  return <Hero />;
};

export default Home;
