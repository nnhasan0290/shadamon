import {
  BiAlarm,
  BiCheck,
  BiHeart,
  BiNotification,
  BiPlusCircle,
} from "react-icons/bi";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaPlus, FaVimeoSquare } from "react-icons/fa";
import { useRef } from "react";
import { CgNotifications } from "react-icons/cg";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import ConnectSlider from "../../ConnectSlider";
import { FcSettings } from "react-icons/fc";
import { RiOrderPlayFill } from "react-icons/ri";

export default function () {
  const profilePicRef = useRef<HTMLInputElement>(null);
  return (
    <div className="p-3">
      <div className="p-3 bg-white rounded-md shadow-xl ">
        <div className="flex justify-center">
          <div
            className="relative cursor-pointer"
            onClick={() => profilePicRef?.current?.click()}
          >
            <img
              src="/cover.jpg"
              className="w-[80px] h-[80px] rounded-full border object-cover"
              alt=""
            />
            <span className="text-red-700 bg-white rounded-full translate-y-[50%] absolute bottom-0 translate-x-[-50%] left-[50%]">
              <BsPlusCircleFill size={25} />
            </span>
          </div>
          <input ref={profilePicRef} hidden type="file" name="" id="" />
        </div>
        <div className="flex items-center justify-between py-3 mt-5 border-b">
          <div className="border-r basis-1/2">
            <h2 className="text-lg font-semibold leading-4">Lovely Akter</h2>
            <span className=" text-common-gray">202283833838393</span>
          </div>
          <div>
            <p className="leading-4 text-common-gray">Account Type</p>
            <p className="my-1 leading-3 text-common-gray">
              free{" "}
              <span className="font-semibold text-black border-r-common-gray">
                Seller
              </span>{" "}
              <span className="font-semibold text-[12px] uppercase border-l-2 text-black border-l-common-gray pl-1">
                Upgrade
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2>NID/Password is not verified</h2>
              <div className="flex items-center gap-1">
                <span className="text-white rounded-full bg-common-color">
                  <BiCheck />
                </span>
                <p>Mobile Verified</p>
              </div>
            </div>
            <button className="text-[13.5px] bg-red-600  text-white px-2 rounded-md py-1">
              <span className="inline-block mr-2">
                <IoMdNotifications />
              </span>
              Verify
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 ">
        <h2 className="mx-3 text-[13.5px] text-common-gray">Post & Earn</h2>
        <div className="px-3 py-1 bg-white rounded-md shadow-lg">
          <div className="text-lg border-b">
            <h2>
              Your Earning: <span className="font-semibold">TK 580</span>
            </h2>
            <p className="text-[11px] leading-4 font-semibold">
              Valid: Till 26.09.2021
            </p>
          </div>
          <div className="flex items-center justify-between py-1 border-b text-common-gray">
            <div>
              <h2 className="leading-4">
                Get $1500. Post 30 add in one month.
              </h2>
              <h2 className="leading-4">
                Get $2500. Post 60 add in one month.
              </h2>
            </div>
            <button className="px-2 text-white rounded-md bg-common-color text-[13.5px] tracking-tight font-semibold py-1">
              Post Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="mx-3 text-[13.5px] text-common-gray">
          Account Activity
        </h2>

        <hr className="w-full h-[5px] my-1 bg-white" />
        <div className="flex flex-wrap ">
          <div className="pr-1 basis-1/3">
            <div className="flex items-center px-3 bg-white  h-[100px] rounded-md">
              <h2 className="text-[13.5px] ">
                {" "}
                <span className="block text-xl font-bold">22</span> Total AD{" "}
                <br /> post
              </h2>
            </div>
          </div>
          <div className="pr-1 basis-1/3">
            <div className="flex items-center px-3 bg-white  h-[100px] rounded-md">
              <h2 className="text-[13.5px] ">
                {" "}
                <span className="block text-xl font-bold">22</span> Total AD{" "}
                <br /> post
              </h2>
            </div>
          </div>
          <div className=" basis-1/3">
            <div className="flex items-center px-3 bg-white  h-[100px] rounded-md">
              <h2 className="text-[13.5px] ">
                {" "}
                <span className="block text-xl font-bold">22</span> Total AD{" "}
                <br /> post
              </h2>
            </div>
          </div>
        </div>
        <hr className="w-full h-[5px] my-1 bg-white" />
        <div className="flex flex-wrap">
          <div className="pr-1 basis-1/3">
            <div className="flex items-center px-3 bg-white  h-[100px] rounded-md">
              <h2 className="text-[13.5px] ">
                {" "}
                <span className="block text-xl font-bold">22</span> Total AD{" "}
                <br /> post
              </h2>
            </div>
          </div>
          <div className="pr-1 basis-1/3">
            <div className="flex items-center px-3 bg-white  h-[100px] rounded-md">
              <h2 className="text-[13.5px] ">
                {" "}
                <span className="block text-xl font-bold">22</span> Total AD{" "}
                <br /> post
              </h2>
            </div>
          </div>
          <div className=" basis-1/3">
            <div className="flex items-center px-3 bg-white  h-[100px] rounded-md">
              <h2 className="text-[13.5px] ">
                {" "}
                <span className="block text-xl font-bold">22</span> Total AD{" "}
                <br /> post
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1 cursor-pointer just">
            <h2 className="mx-3 text-[13.5px] text-common-gray">
              Your following sellers
            </h2>
            <button className="">View All</button>
          </div>
          <ConnectSlider followingSellers={true} />
        </div>
        <div className="mt-2">
          <h2 className="mx-3 text-[13.5px] text-common-gray ">Settings</h2>
          <div className="p-2 bg-white rounded-md shadow-lg">
            <div className="flex items-center mb-1 cursor-pointer text-common-gray">
              <span className="inline-block mr-2">
                <IoMdNotificationsOutline size={23} />
              </span>
              <p className="">Notifications</p>
            </div>
            <div className="flex items-center mb-1 cursor-pointer text-common-gray">
              <span className="inline-block mr-2">
                <FcSettings size={23} />
              </span>
              <p className="">Account Settings</p>
            </div>
            <div className="flex items-center mb-1 cursor-pointer text-common-gray">
              <span className="inline-block mr-2">
                <RiOrderPlayFill size={23} />
              </span>
              <p className="">My Order</p>
            </div>
            <div className="flex items-center text-common-gray">
              <span className="inline-block mr-2">
                <BiHeart size={23} />
              </span>
              <p className="">Favorite Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
