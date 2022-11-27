import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { GoClock, GoLocation } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/router";

const BiggestPost = () => {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="relative w-full overflow-hidden rounded-md">
      <div className="bg-[url('/cover.jpg')] rounded-md blur-[4px]  h-[265px] overflow-hidden"></div>
      <div className="absolute top-0 left-[50%] w-[90%] h-[265px] translate-x-[-50%] ">
        <img
          className="h-full object-cover sm:object-cover mx-auto rounded-md "
          src="/cover.jpg"
          alt="post img"
        />
      </div>
      <div className="bg-gray-300 p-3">
        <div className="flex gap-3 items-center ">
          <div>
            <span className="bg-common-color text-white px-1 text-sm rounded-md">
              Ad
            </span>
            <span className="font-semibold text-sm text-common-gray ml-1">
              Atif Mahmud
            </span>
          </div>
          <div className="flex">
            <div className=" rounded-full h-[20px] flex items-center justify-center text-white w-[20px]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
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
            <span className="font-semibold text-sm text-common-gray ml-1">
              14 people are connected
            </span>
          </div>
        </div>
        <div className="flex justify-between ">
          <div>
            <h2 className="font-bold text-lg leading-5">
              {" "}
              2 RHK Resident Apartment in Chandivali $ 2.85
            </h2>
            <div className="flex gap-3">
              <h2 className="text-common-color font-bold text-lg">Tk 2.31</h2>
              <h2 className="line-through font-bold text-lg">Tk 2.31</h2>
              <h2 className="text-green-700 font-bold text-lg">19% OFF</h2>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-1 text-common-gray">
                <GoLocation />
                <span>Dhaka</span>
              </div>
              <div className="flex items-center gap-1 text-common-gray">
                <GoLocation />
                <span>Dhaka</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-y-2 border-y-common-gray">
          <div className="flex text-xs font-semibold leading-5">
            <h4 className="w-[150px] ">Current Price</h4>
            <h4>Tk 154</h4>
          </div>
          <div className="flex text-xs font-semibold leading-3">
            <h4 className="w-[150px]">Bid standing price</h4>
            <h4>Tk 50</h4>
          </div>
          <div className="flex items-center text-xs font-semibold leading-5 mt-2 mb-1">
            <h4 className="w-[150px]">Your Price</h4>
            <button className="p-2 mr-2 border border-gray-300 rounded-md whitespace-nowrap bg-white">
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
              <p className="text-xs leading-3">Fri Feb 8, 2022 at 07:54pm</p>
            </div>
          </div>
          <div className="items-center flex">
            <button
              className="border border-common-gray py-1 px-3 rounded-md "
              onClick={() => router.push("/123")}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiggestPost;
