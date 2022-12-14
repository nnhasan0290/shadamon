import { GoClock, GoLocation } from "react-icons/go";
import { useRouter } from "next/router";
import { GlobalStates } from "../../context/ContextProvider";

import Add from "./Detail/Add";
import { useScrollDir } from "../../utils/ScrollDir";
import Link from "next/link";
import CloseBtn from "../layout/CloseBtn";
import React from "react";
import { BiCategoryAlt } from "react-icons/bi";

const WannaBid = () => {
  const { dispatch } = GlobalStates();
  const [showDetails, setShowDetails] = React.useState(false);
  const isScrollTop = useScrollDir();

  return (
    <div id="wannaBid" className="">
      {showDetails ? (
        <>
          <div className="mt-[50px] lg:mt-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <Add />
          </div>
          <CloseBtn
            id="wannaBid"
            setState={setShowDetails}
            state={showDetails}
          />
        </>
      ) : (
        <div className="relative flex gap-4 my-2 rounded-md mb-[150px] shadow-xl">
          <div className="relative">
            <img
              src="/cover.jpg"
              alt=""
              className="rounded-md w-[140px] h-[100px] object-cover"
            />
            <div className="absolute text-red-600 bg-white top-[50%] right-0 translate-y-[-95%] translate-x-[50%] rounded-full p-[1px] ">
              <GoClock size={25} />
            </div>
          </div>
          <div className="flex flex-col py-2 font-semibold">
            <h4 className="text-sm leading-4">Want to BID? Harry Up!</h4>
            <div className="flex gap-3 pt-1 text-red-600">
              <div className="flex flex-col">
                <h2 className="p-0 text-xl font-bold leading-3">00</h2>
                <span className="text-xs text-common-gray">Day</span>
              </div>
              <div className="flex flex-col">
                <h2 className="p-0 text-xl font-bold leading-3">07</h2>
                <span className="text-xs text-common-gray">Hours</span>
              </div>
              <div className="flex flex-col">
                <h2 className="p-0 text-xl font-bold leading-3">56</h2>
                <span className="text-xs text-common-gray">Minutes</span>
              </div>
            </div>
            <p className="text-xs leading-3">Fri Feb 8, 2022 at 07:54pm</p>
          </div>
          <div className="h-[158px] py-2 pl-4 shadow-xl pr-2 rounded-md  bg-white absolute w-[98%] right-0 top-[80%]">
            <h2 className="capitalize font-semibold w-[70%] leading-4 ">
              new Super fit it for sale in mailbug dhaka for super cor edition
            </h2>
            <div className="flex gap-3 pb-[1px] text-[11px] font-semibold border-b-2 text-common-gray border-b-gray-300">
              <div className="flex items-center gap-1 ">
                <GoLocation />
                <span>Chittagong</span>
              </div>
              <div className="flex items-center gap-1 ">
                <BiCategoryAlt />
                <span>Category</span>
              </div>
            </div>
            <div className="sm:text-xs text-sm">
              <div className="flex font-semibold leading-5">
                <h4 className="w-[150px] ">Current Price</h4>
                <h4>Tk 154</h4>
              </div>
              <div className="flex  font-semibold leading-3">
                <h4 className="w-[150px]">Bid standing price</h4>
                <h4>Tk 50</h4>
              </div>
              <div className="flex items-center font-semibold leading-5 mt-2 mb-1">
                <h4 className="w-[150px] whitespace-nowrap">Your Price</h4>
                <button className="p-2 mr-2 border border-gray-300 rounded-md whitespace-nowrap bg-white">
                  {" "}
                  Tk. 155
                </button>
                <button className="p-2 text-white border rounded-md bg-common-color whitespace-nowrap">
                  {" "}
                  Buy Now
                </button>
                <div className="sm:ml-[30%] ml-[10px]">
                  <Link href="/#wannaBid">
                    <button
                      className="p-2 mr-2 border border-gray-300 rounded-md "
                      onClick={() => setShowDetails(!showDetails)}
                    >
                      {" "}
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WannaBid;
