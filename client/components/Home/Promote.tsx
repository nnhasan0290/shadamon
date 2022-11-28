import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaHands } from "react-icons/fa";
import { useRouter } from "next/router";
import { GlobalStates } from "../../context/ContextProvider";
import Add from "../Detail/Add";
import { useScrollDir } from "../../utils/ScrollDir";
import Link from "next/link";
import CloseBtn from "../layout/CloseBtn";
import React from "react";

const Promote = () => {
  const { dispatch } = GlobalStates();
  const [showDetails, setShowDetails] = React.useState(false);
  const isScrollTop = useScrollDir();

  return (
    <div id="promote">
      {showDetails ? (
        <>
          <div className="mt-[50px] lg:mt-0">
            <Add />
          </div>
          <CloseBtn
            id="promote"
            setState={setShowDetails}
            state={showDetails}
          />
        </>
      ) : (
        <div className="my-4">
          <div className="flex items-center gap-2 text-common-gray font-semibold p-2 px-5 bg-white rounded-t-lg">
            <FaHands />
            <span>See Product from your suitable category</span>
          </div>
          <div className="relative">
            <img
              className="h-[263px] object-cover w-full rounded-lg"
              src="/cover.jpg"
              alt=""
            />
            <div className="text-xl font-bold text-white absolute bottom-0 m-5 left-0 border-l-4 leading-5 pl-1">
              <h2>Samsung HD Television with Wifi &Bluetooth.</h2>
              <h2>$47320</h2>
            </div>
          </div>
          <div className="px-5 py-3 border rounded-b-md border-t-0 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <BsFillArrowUpRightCircleFill size={25} />
              <div className="w-[90%]">
                <h2 className="font-semibold leading-3">
                  Get More Reactions, more Customers, more Orders
                </h2>
                <p className="whitespace-nowrap overflow-hidden relative text-ellipsis text-sm text-common-gray capitalize">
                  you will get 0 to 1564 react by the price of this with amount
                  of this
                </p>
              </div>
            </div>
            <Link href="/#promote" scroll={false}>
              <button
                className="w-full bg-common-color text-white p-2 rounded-md"
                onClick={() => setShowDetails(!showDetails)}
              >
                Promote
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promote;
