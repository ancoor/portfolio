import React, { createContext, useContext } from "react";
import useFullPageLoader from "../hooks/useFullPageLoader";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const [loader, showLoader, hideLoader] = useFullPageLoader();
 
  return (
    <StateContext.Provider
      value={{
        loader, showLoader, hideLoader,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
