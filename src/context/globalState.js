import React, {createContext, useReducer} from 'react';
import AppReducer from './appReducer';

const initialState = {
  name: '',
  address: '',
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setName(data) {
    dispatch({
      type: 'SET_NAME',
      payload: data,
    });
  }
  function setAddress(data) {
    dispatch({
      type: 'SET_ADDRESS',
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        name: state.name,
        setName,
        address: state.address,
        setAddress,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
