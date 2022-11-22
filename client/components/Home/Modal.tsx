import { ImCross } from "react-icons/im";
import ManualSignUp from "./ManualSignup";
import SignUp from "./Signup";

const Modal = () => {
  const handleClick = (e: any) => {
    console.log(e.target.matches(".modal"));
  };
  return (
    <div
      className="h-screen w-full bg-black/25 fixed top-0 left-0 z-20 flex items-end justify-center"
      onClick={handleClick}
    >
      <div className="w-[250px] hidden lg:block"></div>
      <div className="h-screen w-[515px] relative ">
        <div className="bg-white modal  mx-auto rounded-md flex items-center  flex-col overflow-auto absolute bottom-0 w-full h-[70%] py-5">
          <div className="nav__icon ml-auto text-sm p-[9px]">
            <ImCross />
          </div>
          {/* <SignUp /> */}
          <ManualSignUp />
        </div>
      </div>

      <div className="w-[210px] hidden lg:block "></div>
    </div>
  );
};

export default Modal;
