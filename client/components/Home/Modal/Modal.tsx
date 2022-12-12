import { GlobalStates } from "../../../context/ContextProvider";
import OrderNow from "../Detail/Buttonwork/OrderNow";
import SendBiodata from "../Detail/Buttonwork/SendBiodata";
import SendOffer from "../Detail/Buttonwork/SendOffer";
import BundlePromote from "../promote/BundlePromote";
import Account from "./account/Account";

const Modal = () => {
  //states
  const {
    modalState: { modalOpen, component },
    modalDispatch,
  } = GlobalStates();
  console.log(modalOpen);

  const handleClick = (e: any) => {
    if (!e.target.closest(".modal")) {
      modalDispatch({ type: "CLEAR_MODAL" });
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
        className={`fixed top-0 left-0 z-[130] flex items-end justify-center w-full h-screen bg-black/25 ${
          !modalOpen ? "hidden" : "block"
        } `}
        onClick={handleClick}
      >
        <div className="w-[250px] hidden lg:block"></div>
        <div className="h-screen w-[500px] relative">
          <div className="bg-white modal  rounded-[15px] flex items-center  flex-col overflow-auto absolute bottom-0 mx-auto h-[75vh] pb-5 w-full">
            <div
              className="absolute top-2 right-2 p-2 ml-auto text-xl nav__icon"
              onClick={() => modalDispatch({ type: "CLEAR_MODAL" })}
            >
              <svg
                className="h-[25px] w-[25px] "
                fill="#5a5a5a"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </div>{" "}
            {component}
          </div>
        </div>

        <div className="w-[160px] hidden lg:block "></div>
      </div>
    </>
  );
};

export default Modal;
