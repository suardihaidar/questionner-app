import React, {createContext, useReducer} from 'react';
import AppReducer from './appReducer';

const initialState = {
  dataResult: [],
  name: '',
  address: '',
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setDataResult(data) {
    dispatch({
      type: 'SET_DATA_RESULT',
      payload: data,
    });
  }
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
        dataResult: state.dataResult,
        setDataResult,
        name: state.name,
        setName,
        address: state.address,
        setAddress,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
