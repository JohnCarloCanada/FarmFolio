import { Button, SearchComponent } from "./Utils";
import { btnLinks } from "../constants";
import { motion } from "framer-motion";
import { routeVariants, childVariants } from "../Animations";
import { useContext } from "react";
import FarmFolioContext from "../context/FarmFolioContext";
import { useQuery } from "@tanstack/react-query";
import cloudy from "../assets/cloudy.png";
import { Loader } from "../components";

const Hero = () => {
  const { latitude, longitude, locationError } = useContext(FarmFolioContext);
  const APIKEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKEY}`;

  const date = new Date();
  const today = date.getDay();
  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const { isLoading, data } = useQuery(
    {
      queryKey: ["farmFolioData"],
      queryFn: () => fetch(url).then((res) => res.json()),
    },
    {
      staleTime: 60 * (60 * 1000), // 60 mins
      cacheTime: 60 * (60 * 1000), // 60 mins
    }
  );

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

          {locationError && (
            <section className="h-32 flex justify-center items-center">
              <p className="text-red-800 text-2xl font-bold">Message: {locationError}</p>
            </section>
          )}
          {!locationError && isLoading && <Loader />}
          {!locationError && !isLoading && data && data.message && (
            <section className="h-32 flex justify-center items-center flex-col text-red-800 text-xl font-bold">
              <p>Error Code: {data.cod}</p>
              <p>Message: {data.message}</p>
            </section>
          )}
          {!locationError && !isLoading && data && !data.message && (
            <section className="font-SegoeUI mt-10 flex flex-col items-center md:items-end justify-center md:mr-4">
              <img aria-label="Cloudy Icon" className="w-[40px] h-[40px]" src={cloudy} alt="cloudy" />
              <span className="text-[#fcb313] text-4xl font-bold mt-2">{Math.round(data?.main?.temp)}°C</span>
              <h2 className="mt-1 font-normal">Weather</h2>
              <p className="mt-1 font-normal">{day[today]}</p>
              <p className="mt-1 whitespace-nowrap font-normal">{data?.weather[0]?.description}</p>
            </section>
          )}
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
