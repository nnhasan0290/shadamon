import { useSession } from "next-auth/react";
import React, { useReducer, useContext, useState, useEffect } from "react";
import OrderNow from "../components/Detail/Buttonwork/OrderNow";
import SendOffer from "../components/Detail/Buttonwork/SendOffer";
import Account from "../components/Home/Modal/account/Account";
import Dashboard from "../components/Home/Modal/account/Dashboard";
import PostAdd from "../components/Home/PostAdd";
import SignUp from "../components/Home/Signup";

const GlobalContext: any = React.createContext({});

const initialState = {
  modalOpen: false
};

const reducer = (state: object, action: any) => {
  switch (action.type) {
    case "ORDER_NOW":
      return { modalOpen: true, component: <OrderNow/> };
    case "SEND_OFFER":
      return { modalOpen: true, component: <SendOffer/> };
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
