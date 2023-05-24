import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import useGetLatandLong from "../hooks/useGetLatandLong";

const FarmFolioContext = createContext({});

export const FarmFolioProvider = ({ children }) => {
  const [farmFolioData, setFarmFolioData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch("https://farmfolio.onrender.com/api/crops");

  const { coords } = useGetLatandLong();
  const APIKEY = "438e079696f2c7bdbe94ee8181d570b7";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${APIKEY}`;

  const { data: fetchWeatherData, fetchError: weatherError, isLoading: weatherIsLoading } = useAxiosFetch(url);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setFarmFolioData(data);
      setWeatherData([fetchWeatherData]);
    }

    return () => {
      isMounted = false;
      console.log("Context Re-rendering");
    };
  }, [data, fetchWeatherData]);

  return (
    <FarmFolioContext.Provider
      value={{
        farmFolioData,
        fetchError,
        isLoading,
        weatherData,
        weatherError,
        weatherIsLoading,
      }}
    >
      {children}
    </FarmFolioContext.Provider>
  );
};

export default FarmFolioContext;
