import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const FarmFolioContext = createContext({});

export const FarmFolioProvider = ({ children }) => {
  /* const [farmFolioData, setFarmFolioData] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3000/api/crops");

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setFarmFolioData(data);

    return () => (isMounted = false);
  }, [data]); */

  return (
    <FarmFolioContext.Provider
      value={
        {
          /* farmFolioData */
        }
      }
    >
      {children}
    </FarmFolioContext.Provider>
  );
};

export default FarmFolioContext;
