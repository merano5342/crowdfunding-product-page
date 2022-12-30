import React, { useContext } from 'react';

export const StateContext = React.createContext(null);


export function useStateContext() {
  const ctx = useContext(StateContext);

  if (ctx == null) {
    throw new Error('useContext must be used inside a ContextProvider.');
  }
  return ctx;
}
