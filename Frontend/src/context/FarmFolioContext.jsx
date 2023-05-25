import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import useGetLatandLong from "../hooks/useGetLatandLong";

const FarmFolioContext = createContext({});

export const FarmFolioProvider = ({ children }) => {
  const [farmFolioData, setFarmFolioData] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch("https://farmfolio.onrender.com/api/crops");

  const { coords, error: locationError } = useGetLatandLong();
  const { latitude, longitude } = coords;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setFarmFolioData(data);
    return () => (isMounted = false);
  }, [data]);

  return (
    <FarmFolioContext.Provider
      value={{
        farmFolioData,
        fetchError,
        isLoading,
        latitude,
        longitude,
        locationError,
      }}
    >
      {children}
    </FarmFolioContext.Provider>
  );
};

export default FarmFolioContext;
