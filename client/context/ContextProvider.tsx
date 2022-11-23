import React, { useReducer, useContext, useState } from "react";

const GlobalContext: any = React.createContext({});

const initialState: object = {
  modal: false,
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const ContextProvider = ({ children }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [signState, setSignState] = useState("SIGNUP");

  return (
    <GlobalContext.Provider
      value={{ showModal, setShowModal, signState, setSignState }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const GlobalStates = (): any => useContext(GlobalContext);
