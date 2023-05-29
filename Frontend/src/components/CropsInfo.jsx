import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import FarmFolioContext from "../context/FarmFolioContext";
import { Loader } from "../components";
import { motion } from "framer-motion";
import { routeVariants, childVariants } from "../Animations";

const CropsInfo = () => {
  const { farmFolioData, isLoading } = useContext(FarmFolioContext);
  const { id } = useParams();
  const crop = farmFolioData.filter((crop) => crop._id === id);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading &&
        crop.map((crop) => {
          return (
            <motion.section
              variants={routeVariants}
              initial="initial"
              animate="final"
              key={crop._id}
              className="w-full min-h-[calc(100vh-190px)] px-5 md:px-8 mt-5 md:mt-10 flex flex-col md:flex-row items-center justify-center md:justify-center gap-x-10"
            >
              <div className={`text-center bg-[#fff]`}>
                <h3 className="font-bold font-SegoeUI italic text-base md:text-xl">
                  Common Pests:
                </h3>
                <div className="pb-4">
                  {crop.commonPest.map((pest, index) => (
                    <p key={index}>{pest}</p>
                  ))}
                </div>
                <h3 className="font-bold font-SegoeUI italic text-base md:text-xl">
                  Recommended Climate To Plant:
                </h3>
                <div className="pb-4">
                  <p>{crop.reccomClimate}</p>
                </div>
                <h3 className="font-bold font-SegoeUI italic text-base md:text-xl">
                  Growth Stages:
                </h3>
                <div className="pb-4">
                  {crop.growthStages.map((stages, index) => (
                    <p key={index}>{stages}</p>
                  ))}
                </div>
                <h3 className="font-bold font-SegoeUI italic text-base md:text-xl">
                  Common Varieties:
                </h3>
                <div className="pb-4">
                  {crop.commonVarr.map((varr, index) => (
                    <p key={index}>{varr}</p>
                  ))}
                </div>
              </div>
              <div
                className={`w-[min(100%,600px)] md:w-[min(100%,700px)] mb-5 flex flex-col bg-[#66bb6a] px-10 py-3 rounded-3xl`}
              >
                <div className="px-8 self-center border-b-[3px] border-b-white pb-2 mb-3">
                  <h3 className="text-center text-4xl font-bold text-white">
                    {crop.cropName}
                  </h3>
                </div>
                <p className="text-base md:text-xl text-white text-center mb-5">
                  {crop.firstDescription}
                </p>
                <p className="text-base md:text-xl text-white text-center mb-5">
                  {crop.secondDescription}
                </p>
              </div>
            </motion.section>
          );
        })}
    </>
  );
};

export default CropsInfo;
