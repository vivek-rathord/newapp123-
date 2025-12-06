import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider');
  }
  return context;
};

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const cursorVariants = {
    default: 'default',
    pointer: 'pointer',
    text: 'text',
    hidden: 'hidden',
    zoom: 'zoom',
    drag: 'drag'
  };

  const changeCursor = (type, text = '') => {
    setCursorType(type);
    setCursorText(text);
  };

  const resetCursor = () => {
    setCursorType('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider
      value={{
        cursorType,
        cursorText,
        cursorVariants,
        changeCursor,
        resetCursor
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};