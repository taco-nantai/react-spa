import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const IsLoggedInContext = createContext(false);

export const IsLoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInContext.Provider>
  );
};

export const useIsLoggedIn = () => useContext(IsLoggedInContext);

IsLoggedInProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
