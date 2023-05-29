import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import FarmFolioContext from "../context/FarmFolioContext";

const CropsInfo = () => {
  const { farmFolioData, fetchError, isLoading } = useContext(FarmFolioContext);
  const { id } = useParams();
  const crop = farmFolioData.filter((crop) => crop._id === id);

  console.log(crop);
  return <main>{crop[0].cropName}</main>;
};

export default CropsInfo;
