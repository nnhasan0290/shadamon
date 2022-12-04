import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";

export default function () {
  const [chatState, setChatState] = useState(false);
  return (
    <div className="w-full mb-[60px]">
      <div className="flex self-start justify-start gap-2 p-2 bg-white  rounded-md align-start text-[13.5px] border-b shadow-lg">
        <h2
          onClick={() => setChatState(!chatState)}
          className={`px-2  cursor-pointer  py-1 font-semibold rounded-md transition-all duration-300 ${
            !chatState ? "bg-common-color text-white" : "bg-account-gray"
          }`}
        >
          Message
        </h2>
        <h2
          onClick={() => setChatState(!chatState)}
          className={`px-2  py-1 transition-all duration-300 font-semibold rounded-md  cursor-pointer ${
            chatState ? "bg-common-color text-white" : "bg-account-gray"
          }`}
        >
          Chat
        </h2>
      </div>
      <div className="p-4">
        <div className="flex justify-between border-b pb-3 ">
          <div className="flex items-center leading-4 text-sm gap-2 ">
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src="/cover.jpg"
              alt=""
            />
            <div>
              <p>Memory Card S...</p>
              <p>$950</p>
            </div>
          </div>
          <div className="flex items-center  leading-4 text-sm gap-2 ">
            <div className="text-right ">
              <p className="text-lg leading-4">
                Arman <span className="text-[10px]">Dhaka</span>
              </p>
              <div className="flex gap-2">
                <button className="px-2  border rounded-md text-[13.5px] border-green-500">
                  Seller Page
                </button>
                <button className="border bg-green-500 text-white px-2 rounded-md">
                  Follow
                </button>
              </div>
            </div>
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src="/cover.jpg"
              alt=""
            />
          </div>
        </div>
        {!chatState && (
          <div>
            <h2 className="text-xl font-semibold">
              Send Seller a Offer Price...
            </h2>
            <div className="flex gap-2 my-2">
              <button className="border rounded-full p-1 px-3 bg-green-300">
                4,000
              </button>
              <button className="border rounded-full p-1 px-3 ">4,000</button>
              <button className="border rounded-full p-1 px-3 ">4,000</button>
              <button className="border rounded-full p-1 px-3 ">4,000</button>
              <button className="border rounded-full p-1 px-3 ">4,000</button>
            </div>
            <h2 className="text-xl font-semibold border-b inline-block p-2">
              $ 4,000
            </h2>
            <button className="block p-2 text-center bg-orange-300 w-full my-2 rounded-md">
              Send a offer
            </button>
          </div>
        )}
        <div className="fixed bg-white w-[90%] bottom-[15px] sm:w-[460px]">
          {chatState && (
            <div>
              <div className="  flex">
                <p className="max-w-[60%] tracking-tight  text-right  text-sm my-1 bg-blue-200  rounded-full px-4 py-1">
                  Hi there, I want to Discuss with you.
                </p>
              </div>
              <div className="  flex justify-end">
                <p className="max-w-[60%] tracking-tight  text-right  text-sm my-1 bg-blue-500 text-white rounded-full px-4 py-1">
                  Hi there, I want to Discuss with you.
                </p>
              </div>
            </div>
          )}

          <div className="    flex gap-2 ">
            <span className="bg-blue-500 rounded-full text-white w-[35px] h-[30px] flex items-center justify-center">
              <BsArrowUp />
            </span>
            <input
              type="text"
              placeholder="Type a message"
              className="border rounded-full px-3"
            />
            <span className="bg-common-color rounded-md text-white w-[35px] h-[30px] flex items-center justify-center">
              <BiSend />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
