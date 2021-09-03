import React, { createContext, useState, useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const MainContext = createContext();
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
