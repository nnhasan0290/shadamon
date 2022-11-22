import { ImCross } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";

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
      <div className="h-screen w-[515px] relative">
        <div className="bg-white modal  mx-auto rounded-md flex items-center  flex-col overflow-auto absolute bottom-0 w-full h-[70%]">
          <div className="nav__icon ml-auto text-sm p-[9px]">
            <ImCross />
          </div>
          <div>
            <img src="/signup-logo.png" alt="" width={100} height={100} />
          </div>
          <p>Post an Ad</p>
          <p>Please Sign Up to post your ad</p>
          <p>OR</p>
          <button className="border flex items-center gap-3">
            <div>
              <FcGoogle />
            </div>
            <p>Continue with Google</p>
          </button>
        </div>
      </div>

      <div className="w-[210px] hidden lg:block"></div>
    </div>
  );
};

export default Modal;
