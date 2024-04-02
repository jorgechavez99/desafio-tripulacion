import React, { createContext, useState, useContext } from 'react';


const CornerContext = createContext();


export const CornerProvider = ({ children }) => {
  const [corner, setCorner] = useState(null);
  return (
    <CornerContext.Provider value={{ corner, setCorner }}>
      {children}
    </CornerContext.Provider>
  );
};

export const CornerSelected = () => {
  return useContext(CornerContext);
};