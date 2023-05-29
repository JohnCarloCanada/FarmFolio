import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import FarmFolioContext from "../context/FarmFolioContext";

const CropsInfo = () => {
  const { farmFolioData, fetchError, isLoading } = useContext(FarmFolioContext);
  const { id } = useParams();
  const crop = farmFolioData.filter((crop) => crop._id === id);

  return (
    <section className="w-full px-5 md:px-8">
      <section className="w-[min(100%,1100px)] mx-auto mt-5 md:mt-10">
        <div></div>
      </section>
    </section>
  );
};

export default CropsInfo;
