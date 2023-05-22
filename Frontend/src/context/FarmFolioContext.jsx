import { createContext } from "react";

const FarmFolioContext = createContext({});

export const FarmFolioProvider = ({ children }) => {
  return <FarmFolioContext.Provider value={{}}>{children}</FarmFolioContext.Provider>;
};

export default FarmFolioContext;
