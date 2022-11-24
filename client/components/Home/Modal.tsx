import { useState, useEffect } from "react";
import { GlobalStates } from "../../context/ContextProvider";
import ManualSignUp from "./ManualSignup";
import SignUp from "./Signup";
import PostAdd from "./PostAdd";

const Modal = () => {
  //states
  const { signState, setSignState, showModal, setShowModal, status } =
    GlobalStates();
  const [withEmail, setWithEmail] = useState(false);

  const handleClick = (e: any) => {
    if (!e.target.closest(".modal")) {
      setShowModal(!showModal);
    }
  };

  useEffect(() => {
    console.log(status);
    if (status === "authenticated") {
      setShowModal(true);
      setWithEmail(true);
    }
  }, [status]);
  return (
    <div
      className={`fixed top-0 left-0 z-20 flex items-end justify-center w-full h-screen bg-black/25 ${
        showModal ? "block" : "hidden"
      }`}
      onClick={handleClick}
    >
      <div className="w-[250px] hidden lg:block"></div>
      <div className="h-screen w-[515px] relative">
        <div className="bg-white modal  rounded-[15px] flex items-center  flex-col overflow-auto absolute bottom-0 mx-auto h-[75vh] pb-5 w-full">
          <div
            className="fixed w-auto h-auto p-2 ml-auto text-xl nav__icon modal__cross"
            onClick={() => setShowModal(!showModal)}
          >
            <svg
              className="h-[25px] w-[25px] "
              fill="#5a5a5a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
          {withEmail ? <ManualSignUp /> : <SignUp emailState={setWithEmail} />}
          {/* <PostAdd /> */}
        </div>
      </div>

      <div className="w-[210px] hidden lg:block "></div>
    </div>
  );
};

export default Modal;
