import { useSession } from "next-auth/react";
import React, { useReducer, useContext, useState, useEffect } from "react";

const GlobalContext: any = React.createContext({});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "BIG POST DETAIL":
      return true;
    case "CLEAR DETAIL":
      return false;
    default:
      return state;
  }
};

const ContextProvider = ({ children }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [detailState, dispatch] = useReducer(reducer, false);
  const [signState, setSignState] = useState("SIGNUP");
  const { status } = useSession();

  return (
    <GlobalContext.Provider
      value={{
        showModal,
        setShowModal,
        signState,
        setSignState,
        status,
        detailState,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const GlobalStates = (): any => useContext(GlobalContext);
