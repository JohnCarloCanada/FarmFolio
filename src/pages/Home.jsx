import { Hero } from "../components";
import { useState, useEffect } from "react";

const Home = () => {
  const [title, setTitle] = useState("FarmFolio");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Hero />;
};

export default Home;
