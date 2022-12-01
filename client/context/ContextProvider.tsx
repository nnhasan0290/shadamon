import { useSession } from "next-auth/react";
import React, { useReducer, useContext, useState, useEffect } from "react";
import Dashboard from "../components/Home/account/Dashboard";
import PostAdd from "../components/Home/PostAdd";
import SignUp from "../components/Home/Signup";

const GlobalContext: any = React.createContext({});

const initialState = {
  modalOpen: true,
  component: <Dashboard />,
};

const reducer = (state: object, action: any) => {
  switch (action.type) {
    case "CLEAR_MODAL":
      return { modalOpen: false };
    default:
      return state;
  }
};

const ContextProvider = ({ children }: any) => {
  const { status } = useSession();
  const [modalState, modalDispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        modalState,
        modalDispatch,
        status,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const GlobalStates = (): any => useContext(GlobalContext);
