import { Button, SearchComponent } from "./Utils";
import { WeatherForecast } from "../components";
import { btnLinks } from "../constants";
import { motion } from "framer-motion";
import { routeVariants, childVariants } from "../Animations";
import { useContext } from "react";
import FarmFolioContext from "../context/FarmFolioContext";

const Hero = () => {
  const { weatherData, weatherError: fetchError, weatherIsLoading: isLoading } = useContext(FarmFolioContext);

  return (
    <motion.main
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="bg-[url('/src/assets/bg-image2.png')] w-full min-h-[593px] bg-cover bg-bottom bg-no-repeat px-5 md:px-8"
    >
      <div className="w-[min(100%,1280px)] mx-auto">
        <section className="flex items-center flex-col md:flex-row justify-between">
          <section className="flex flex-col">
            <div className="md:w-[min(100%,650px)] md:ml-10">
              <motion.h1
                variants={childVariants}
                initial="initial"
                animate="final"
                className="font-SegoeUI text-4xl md:text-5xl text-center md:text-left mt-4"
              >
                Experience Farming perfection with FarmFolio
              </motion.h1>
              <p className="font-SegoeUI mt-5 text-base md:text-xl text-center md:text-left text-[#4c4c4c]">
                A comprehensive catagalog of all your farming needs that shows general information about crops, pests, and procedures for pest control
                and also displays weather forecast.
              </p>
            </div>
          </section>
          {isLoading && <p>PLEASE WAIT</p>}
          {fetchError && !isLoading && <p>PLEASE WAIT</p>}
          {!fetchError && !isLoading && weatherData.map((data, index) => <WeatherForecast key={index} data={data} />)}
        </section>
        <aside className="flex w-full items-center md:justify-start justify-center pb-10 md:pb-0">
          <div className="flex flex-col mt-5 md:mt-24 md:ml-10 w-[241px] font-SegeoUI">
            <SearchComponent />
            {btnLinks.map((btn, indx) => (
              <Button key={indx} {...btn} />
            ))}
          </div>
        </aside>
      </div>
    </motion.main>
  );
};

export default Hero;
