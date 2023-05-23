import React, { useContext } from "react";
import FarmFolioContext from "../context/FarmFolioContext";
import { motion } from "framer-motion";
import { routeVariants, childVariants } from "../Animations";

const CropCards = ({ image, cropName, cropOtherName, scientificName, firstDescription, secondDescription, hoverImage, index }) => {
  return (
    <section className={`w-[min(100%,250px)] ${index % 2 == 0 ? "bg-[#fff]" : "bg-[#66bb6a]"} rounded-md cursor-pointer group overflow-hidden`}>
      <div
        className={`flex flex-col w-[min(100%,150px)] mx-auto border-b-[1px] group-hover:border-b-[3px] ${
          index % 2 == 0 ? "border-b-[#66bb6a]" : "border-b-white"
        } duration-150 ease-in delay-150 `}
      >
        <img className="pb-5 md:pb-6 h-[150px] object-contain group-hover:h-0 duration-150 ease-in" src={image} alt="crop" aria-hidden={true} />
        <h3 className={`font-bold text-base ${index % 2 == 0 ? "text-[#66bb6a]" : "text-white"} pb-1 md:pb-2`}>{cropName}</h3>
      </div>
      <div
        className={`mb-2 md:mb-3 ${index % 2 == 0 ? "text-black" : "text-white"} pt-1 md:pt-2 group-hover:h-0 duration-150 ease-in overflow-hidden`}
      >
        <h3 className="text-xs">({cropOtherName})</h3>
        <h3 className="text-sm">{scientificName}</h3>
      </div>
      <div
        className={`h-0 w-[min(100%,180px)] mx-auto group-hover:h-[100%] duration-150 ease-in delay-150 text-sm text-justify ${
          index % 2 == 0 ? "text-black" : "text-white"
        } `}
      >
        <p className="mb-5 md-mb-6">{firstDescription}</p>
        <p className="mb-5 md-mb-6">{secondDescription}</p>
        <img aria-hidden={true} className="pb-5 md:pb-6" src={hoverImage} alt="Crop Description Image" />
      </div>
    </section>
  );
};

const NewlyRealease = () => {
  const { farmFolioData } = useContext(FarmFolioContext);

  return (
    <motion.section variants={routeVariants} initial="initial" animate="final" className="w-full text-center px-5 md:px-8">
      <section className="w-[min(100%,1100px)] mx-auto mt-5 md:mt-10">
        <div className="flex flex-col">
          <motion.h3
            variants={childVariants}
            initial="initial"
            animate="final"
            className="mb-7 md:mb-9 text-3xl font-SegeoUIBold font-bold text-[#959595]"
          >
            NEWLY RELEASED
          </motion.h3>
          <p className="text-base md:text-xl font-SegoeUI">
            Introducing our <span className="font-bold font-SegeoUIBold">newly released crops!</span> Discover and learn new crops. Whether you are an
            agricultural enthusiast, a farmer seeking new information, or a researcher, stay informed with updated and newly released crops.
          </p>
        </div>

        <aside className="flex items-start justify-center gap-4 flex-wrap mt-5 mb-5 md:mt-14 md:mb-7">
          {farmFolioData.map((crop, index) => {
            return (
              <CropCards
                key={crop._id}
                index={index}
                image={crop.image}
                hoverImage={crop.hoverImage}
                cropName={crop.cropName}
                cropOtherName={crop.cropOtherName}
                scientificName={crop.scientificName}
                firstDescription={crop.firstDescription}
                secondDescription={crop.secondDescription}
              />
            );
          })}
        </aside>
      </section>
    </motion.section>
  );
};

export default NewlyRealease;
