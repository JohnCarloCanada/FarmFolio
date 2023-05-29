import React, { useContext } from "react";
import FarmFolioContext from "../context/FarmFolioContext";
import { AnimatePresence, motion } from "framer-motion";
import { routeVariants, childVariants } from "../Animations";
import { Loader, ErrorHandling } from "../components";
import { Link } from "react-router-dom";
import { SearchComponent } from "./Utils";

const CropCards = ({
  image,
  cropName,
  cropOtherName,
  scientificName,
  index,
  id,
}) => {
  return (
    <section
      className={`w-[min(100%,250px)] ${
        index % 2 == 0 ? "bg-[#fff]" : "bg-[#66bb6a]"
      } rounded-md cursor-pointer`}
    >
      <Link to={`/Crops/${id}`}>
        <div
          className={`flex flex-col w-[min(100%,150px)] mx-auto border-b-[1px] ${
            index % 2 == 0 ? "border-b-[#66bb6a]" : "border-b-white"
          }`}
        >
          <img
            className="pb-5 md:pb-6 h-[150px] object-contain"
            src={image}
            alt={`image of an ${cropName}`}
            aria-hidden={true}
          />
          <h3
            className={`font-bold text-base ${
              index % 2 == 0 ? "text-[#66bb6a]" : "text-white"
            } pb-1 md:pb-2`}
          >
            {cropName}
          </h3>
        </div>
        <div
          className={`mb-2 md:mb-3 ${
            index % 2 == 0 ? "text-black" : "text-white"
          } pt-1 md:pt-2 overflow-hidden`}
        >
          <h3 className="text-xs">({cropOtherName})</h3>
          <h3 className="text-sm">{scientificName}</h3>
        </div>
      </Link>
    </section>
  );
};

const NewlyRealease = () => {
  const { searchResults, fetchError, isLoading } = useContext(FarmFolioContext);

  return (
    <motion.section
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="w-full text-center px-5 md:px-8"
    >
      <section className="w-[min(100%,1100px)] min-h-[calc(100vh-190px)] flex flex-col justify-center items-center mx-auto mt-5 md:mt-10">
        <div className="flex flex-col">
          <motion.h3
            variants={childVariants}
            initial="initial"
            animate="final"
            className="mb-7 md:mb-9 text-3xl font-SegeoUIBold font-bold text-[#959595]"
          >
            CROPS
          </motion.h3>
          <p className="text-base md:text-xl font-SegoeUI">
            Welcome to{" "}
            <span className="font-bold font-SegeoUIBold">FarmFolio</span>, a
            Smart Farm Integration Website, where we bring the future of crop
            cultivation to your fingertips. Through our integrated smart farm
            solutions, we empower farmers to optimize every aspect of their crop
            production, from planting to harvesting, all while ensuring
            sustainable practices and maximizing yields.
          </p>
        </div>

        <section className="flex flex-col justify-center items-center  mt-5 mb-5 md:mt-14 md:mb-7">
          <div className="w-[241px] mb-5">
            <SearchComponent />
          </div>
          <aside className="flex items-start justify-center gap-4 flex-wrap">
            {isLoading && <Loader />}
            {!isLoading && fetchError && <ErrorHandling error={fetchError} />}
            {!isLoading &&
              !fetchError &&
              searchResults.map((crop, index) => {
                return (
                  <CropCards
                    key={crop._id}
                    id={crop._id}
                    index={index}
                    image={crop.image}
                    cropName={crop.cropName}
                    cropOtherName={crop.cropOtherName}
                    scientificName={crop.scientificName}
                  />
                );
              })}
          </aside>
        </section>
      </section>
    </motion.section>
  );
};

export default NewlyRealease;
