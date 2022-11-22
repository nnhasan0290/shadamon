import { useState } from "react";
import { ImCross } from "react-icons/im";
import { GlobalStates } from "../../context/ContextProvider";
import ManualSignUp from "./ManualSignup";
import SignUp from "./Signup";

const Modal = () => {
  //states
  const { showModal, setShowModal } = GlobalStates();
  const [withEmail, setWithEmail] = useState(false);

  const handleClick = (e: any) => {
    console.log(e.target.closest(".modal"));
    if (!e.target.closest(".modal")) {
      setShowModal(!showModal);
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 z-20 flex items-end justify-center w-full h-screen bg-black/25 ${
        showModal ? "block" : "hidden"
      }`}
      onClick={handleClick}
    >
      <div className="w-[250px] hidden lg:block"></div>
      <div className="h-screen w-[515px] relative ">
        <div className="bg-white modal  mx-auto rounded-md flex items-center  flex-col overflow-auto absolute bottom-0 w-full h-[70%] pb-5">
          <div
            className="nav__icon ml-auto text-sm p-[9px]"
            onClick={() => setShowModal(!showModal)}
          >
            <ImCross />
          </div>
          {withEmail ? <ManualSignUp /> : <SignUp />}
        </div>
      </div>

      <div className="w-[210px] hidden lg:block "></div>
    </div>
  );
};

export default Modal;
