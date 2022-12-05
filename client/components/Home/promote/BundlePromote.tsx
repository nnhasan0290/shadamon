import Link from "next/link";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import PriceCarousel from "./PriceCarousel";

const BundlePromote = () => {
  const [promoteState, setPromoteState] = useState("BUNDLE");
  return (
    <div className="w-full bg-body-bg">
      <nav className="flex gap-3 justify-start px-4 py-1 font-semibold bg-white border-b shadow-lg">
        <span>Post</span>
        <span>order</span>
        <span>page</span>
        <span className="border-b-2 border-b-blue-500">Promote</span>
      </nav>
      <div className="p-3 m-3 bg-white rounded-lg">
        <h2 className="font-semibold">Create a Promotion</h2>
        <div className="flex gap-10">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`flex justify-center items-center p-3 cursor-pointer rounded-full border ${
                promoteState === "BUNDLE" && "bg-orange-200"
              }`}
              onClick={() => {
                setPromoteState("BUNDLE");
              }}
            >
              <span
                className={`rounded-full ${
                  promoteState === "BUNDLE" && "text-common-color"
                }  `}
              >
                <FaThumbsUp />
              </span>
            </div>
            <p className="text-xs leading-3 text-center text-common-gray">
              Promote{" "}
              <span className="block font-semibold text-black">Bundle</span>{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`flex justify-center items-center p-3 cursor-pointer rounded-full border ${
                promoteState === "POST" && "bg-orange-200"
              }`}
              onClick={() => {
                setPromoteState("POST");
              }}
            >
              <span
                className={`rounded-full ${
                  promoteState === "POST" && "text-common-color"
                }  `}
              >
                <FaThumbsUp />
              </span>
            </div>
            <p className="text-xs leading-3 text-center text-common-gray">
              Promote{" "}
              <span className="block font-semibold text-black">Post</span>{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`flex justify-center items-center p-3 cursor-pointer rounded-full border ${
                promoteState === "SITE" && "bg-orange-200"
              }`}
              onClick={() => {
                setPromoteState("SITE");
              }}
            >
              <span
                className={`rounded-full ${
                  promoteState === "SITE" && "text-common-color"
                }  `}
              >
                <FaThumbsUp />
              </span>
            </div>
            <p className="text-xs leading-3 text-center text-common-gray">
              Promote{" "}
              <span className="block font-semibold text-black">Website</span>{" "}
            </p>
          </div>
        </div>
        <div className="my-5">
          {promoteState === "BUNDLE" && (
            <h2 className="font-semibold">Promote a Bundle Package</h2>
          )}
          {promoteState === "POST" && (
            <h2 className="font-semibold">Promote a Post</h2>
          )}
          {promoteState === "SITE" && (
            <h2 className="font-semibold">Promote a Website</h2>
          )}

          <p className="text-sm font-semibold tracking-tight leading-3">
            {" "}
            It's like the props in a furniture store—filler text makes it look
            like someone is home. The same Wordpress template might eventually
            be …
          </p>
          {promoteState === "BUNDLE" ? <PriceCarousel /> : (
             <button className="py-2 my-3 w-full text-sm bg-orange-300 rounded-md">Select Post & Promote</button>
          )}
         

          <p className="my-2 text-sm font-semibold tracking-tight leading-3 text-center">
            Want to know something?
          </p>
          <p className="px-3 py-1 pl-10 my-2 text-sm rounded-lg bg-body-bg text-common-gray">
            What is Your Payment method?
          </p>
          <div className="flex gap-3 px-10 pt-1 text-xs tracking-tight leading-5 bg-white rounded-t-2xl border border-b-0 justi fy-between">
            <p className="capitalize">
              shadamon help chat.{" "}
              <button className="px-1 text-white uppercase bg-blue-500 border">
                chat
              </button>
            </p>
            <p> or Call Helpline : 017373738437373</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundlePromote;
