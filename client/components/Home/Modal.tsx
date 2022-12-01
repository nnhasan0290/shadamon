import { useState, useEffect } from "react";
import { GlobalStates } from "../../context/ContextProvider";
import ManualSignUp from "./ManualSignup";
import SignUp from "./Signup";
import PostAdd from "./PostAdd";
import Dashboard from "./account/Dashboard";
import Account from "./account/Account";

const Modal = () => {
  //states

  const handleClick = (e: any) => {
    if (!e.target.closest(".modal")) {
    }
  };

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     setShowModal(true);
  //     setWithEmail(true);
  //   }
  // }, [status]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[130] flex items-end justify-center w-full h-screen bg-black/25 `}
        onClick={handleClick}
      >
        <div className="w-[250px] hidden lg:block"></div>
        <div className="h-screen w-[500px] relative">
          <div className="bg-white modal  rounded-[15px] flex items-center  flex-col overflow-auto absolute bottom-0 mx-auto h-[75vh] pb-5 w-full">
            <div className="absolute p-2 ml-auto text-xl top-2 right-2 nav__icon">
              <svg
                className="h-[25px] w-[25px] "
                fill="#5a5a5a"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </div>{" "}
            <Account />
          </div>
        </div>

        <div className="w-[160px] hidden lg:block "></div>
      </div>
    </>
  );
};

export default Modal;
