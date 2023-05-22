import React from "react";
import useSetTitle from "../hooks/useSetTitle";
import { NewlyRealase } from "../components";

const Crops = () => {
  useSetTitle("FarmFolio Crops");
  return <NewlyRealase />;
};

export default Crops;
