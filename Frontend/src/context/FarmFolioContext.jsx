import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import useGetLatandLong from "../hooks/useGetLatandLong";

const FarmFolioContext = createContext({});

export const FarmFolioProvider = ({ children }) => {
  const [farmFolioData, setFarmFolioData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://farmfolio.onrender.com/api/crops"
  );

  const { coords, error: locationError } = useGetLatandLong();
  const { latitude, longitude } = coords;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setFarmFolioData(data);
    return () => (isMounted = false);
  }, [data]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      const filteredResults = farmFolioData.filter(
        (crop) =>
          crop.cropName.toLowerCase().includes(search.toLowerCase()) ||
          crop.cropOtherName.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [farmFolioData, search]);

  return (
    <FarmFolioContext.Provider
      value={{
        farmFolioData,
        fetchError,
        isLoading,
        latitude,
        longitude,
        locationError,
        search,
        setSearch,
        searchResults,
      }}
    >
      {children}
    </FarmFolioContext.Provider>
  );
};

export default FarmFolioContext;
