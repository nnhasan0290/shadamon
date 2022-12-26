import { useSession } from "next-auth/react";
import React, { useReducer, useContext, useState, useEffect } from "react";
import CallBack from "../components/Home/Detail/Buttonwork/CallBack";
import OrderNow from "../components/Home/Detail/Buttonwork/OrderNow";
import SendBiodata from "../components/Home/Detail/Buttonwork/SendBiodata";
import SendCode from "../components/Home/Detail/Buttonwork/SendCode";
import SendOffer from "../components/Home/Detail/Buttonwork/SendOffer";
import Telephone from "../components/Home/Detail/Buttonwork/Telephone";
import Account from "../components/Home/Modal/account/Account";
import Dashboard from "../components/Home/Modal/account/Dashboard";
import PostAdd from "../components/Home/Modal/auth/PostAdd";
import BundlePromote from "../components/Home/promote/BundlePromote";
import SignUp from "../components/Home/Modal/auth/Signup";
const GlobalContext: any = React.createContext({});

const initialState = {
  modalOpen: false,
  adminModalOpen: false,
  smallModalOpen:false,
  middleModalOpen:false,
  component: "",
  smComponent: "",
  mdComponent:""
};

const reducer = (state: object, action: any) => {
  switch (action.type) {
    case "BIODATA":
      return { modalOpen: true, component: <SendBiodata /> };
    case "CALLBACK":
      return { modalOpen: true, component: <CallBack /> };
    case "CODE":
      return { modalOpen: true, component: <SendCode /> };
    case "TELEPHONE":
      return { modalOpen: true, component: <Telephone /> };
    case "ORDER_NOW":
      return { modalOpen: true, component: <OrderNow /> };
    case "SEND_OFFER":
      return { modalOpen: true, chatState: false, component: <SendOffer /> };
    case "MESSAGE":
      return { modalOpen: true, chatState: true, component: <SendOffer /> };

    case "PROMOTE":
      return { modalOpen: true, component: <BundlePromote /> };

    case "GLOBAL_MODAL":
      return { ...state,modalOpen: true, component: action.payload };

    case "ADMIN_MODAL":
      return { adminModalOpen: true, component: action.payload };

    case "SMALL_MODAL":
      return {...state, smallModalOpen: true, smComponent: action.payload };
    case "MIDDLE_MODAL":
      return {...state, middleModalOpen: true, mdComponent: action.payload };

    case "CLEAR_MODAL":
      return {...state, modalOpen: false, adminModalOpen: false,smallModalOpen:false };
    case "CLEAR_SM_MODAL":
      return {...state, smallModalOpen:false };
    case "CLEAR_MD_MODAL":
      return {...state, middleModalOpen:false };
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
