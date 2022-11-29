import { useState, useRef } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { GoClock, GoLocation } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/router";
import { GlobalStates } from "../../context/ContextProvider";
import Add from "../Detail/Add";

import { useScrollDir } from "../../utils/ScrollDir";
import CloseBtn from "../layout/CloseBtn";

const BiggestPost = () => {
  const { dispatch } = GlobalStates();
  const [showDetails, setShowDetails] = useState(false);
  const isScrollTop = useScrollDir();
  return (
    <div id="premiumPost">
      {showDetails ? (
        <>
          <div className="mt-[50px] lg:mt-0">
            <Add />
          </div>
          <CloseBtn
            id="premiumPost"
            setState={setShowDetails}
            state={showDetails}
          />
        </>
      ) : (
        <div
          className={`relative w-full overflow-hidden rounded-md ${
            isScrollTop && "mt-[50px]"
          } lg:mt-0`}
        >
          <div className="relative">
            <div className="bg-[url('/cover.jpg')] absolute top-0 left-0 rounded-md  w-full h-[100%] blur-[4px]"></div>
            <div className="relative z-10">
              <img
                className=" mx-auto rounded-md h-[253px] max-w-[100%] object-cover sm:object-contain"
                src="/cover.jpg"
                alt="post img"
              />
            </div>
          </div>
          <div className="p-3 bg-gray-300">
            <div className="flex items-center gap-3 ">
              <div className="text-[13.5px]">
                <span className="bg-common-color text-white px-1 rounded-sm text-[11px]">
                  Ad
                </span>
                <span className="ml-1 text-smallest-color whitespace-nowrap">
                  Atif Mahmud
                </span>
              </div>
              <div className="flex">
                <div className=" rounded-full h-[20px] flex items-center justify-center text-white w-[20px] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="me-1 text-common-color"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                  </svg>
                </div>
                <span className="ml-1 text-sm whitespace-nowrap text-smallest-color">
                  14 people are connected
                </span>
              </div>
            </div>
            <div className="flex justify-between ">
              <div>
                <h2 className="text-lg font-semibold leading-5 text-heading-color">
                  {" "}
                  2 RHK Resident Apartment in Chandivali
                </h2>
                <p className="font-semibold text-[17px] text-heading-color">
                  $2.85
                </p>
                <div className="flex gap-3">
                  <h2 className="text-lg font-bold text-common-color">
                    Tk 2.31
                  </h2>
                  <h2 className="text-lg font-bold line-through">Tk 2.31</h2>
                  <h2 className="text-lg font-bold text-green-700">19% OFF</h2>
                </div>
                <div className="flex items-center gap-3 text-smallest-color">
                  <div className="flex items-center gap-1">
                    <GoLocation />
                    <span>Dhaka</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GoLocation />
                    <span>Dhaka</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border-y border-y-regular-border">
              <div className="flex text-xs font-semibold leading-5">
                <h4 className="w-[150px] ">Current Price</h4>
                <h4>Tk 154</h4>
              </div>
              <div className="flex text-xs font-semibold leading-3">
                <h4 className="w-[150px]">Bid standing price</h4>
                <h4>Tk 50</h4>
              </div>
              <div className="flex items-center mt-2 mb-1 text-xs font-semibold leading-5">
                <h4 className="w-[150px]">Your Price</h4>
                <button className="p-2 mr-2 bg-white border border-gray-300 rounded-md whitespace-nowrap">
                  {" "}
                  Tk. 155
                </button>
                <button className="p-2 text-white border rounded-md bg-common-color whitespace-nowrap">
                  {" "}
                  Buy Now
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className=" text-red-600 flex rounded-full p-[1px] ">
                  <GoClock size={25} />
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
                  <p className="text-xs leading-3">
                    Fri Feb 8, 2022 at 07:54pm
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Link href="/#premiumPost" scroll={false}>
                  <button
                    className="px-3 py-1 border rounded-md border-common-gray "
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BiggestPost;
