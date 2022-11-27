import { useState, useEffect } from "react";
import { GlobalStates } from "../../context/ContextProvider";
import Add from "./Add";
const DetailModal = () => {
  const [showModal, setShowModal] = useState(true);
  const { detailState, dispatch } = GlobalStates();

  const handleClick = (e: any) => {
    if (!e.target.closest(".modal")) {
      dispatch({ type: "CLEAR DETAIL" });
    }
  };

  return (
    <>
      {detailState && (
        <div
          className={`fixed top-0 left-0 z-[50] flex items-end justify-center w-full h-screen bg-black/25 `}
          onClick={handleClick}
        >
          <div className="w-[250px] hidden lg:block"></div>
          <div className="h-screen w-[500px] relative">
            <div className="bg-white modal  rounded-[15px] flex items-center  flex-col  absolute top-0 mx-auto h-[100vh] pb-5 w-full ">
              <Add />
            </div>
          </div>

          <div className="w-[160px] hidden lg:block "></div>
        </div>
      )}
    </>
  );
};

export default DetailModal;
