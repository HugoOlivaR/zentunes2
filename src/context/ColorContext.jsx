/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import React from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("green-500");

  return (
    <ColorContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
