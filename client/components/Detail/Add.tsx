import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiChevronDown, BiChevronUp, BiStar } from "react-icons/bi";
import { FaTruckMoving, FaPeopleCarry, FaEye } from "react-icons/fa";
import {
  BsTelephone,
  BsPinterest,
  BsFillTelephoneInboundFill,
  BsFillChatDotsFill,
} from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";
import Link from "next/link";
import DownCarousel from "./DownCarousel";
import MyCarousel from "./MyCarousel";

const Add = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [showDes, setShowDes] = useState(true);
  const [showShipping, setShowShipping] = useState(true);
  return (
    <main className=" bg-white rounded-md sm:w-[500px] w-full shadow-xl">
      <div className="">
        <div className="relative ">
          <MyCarousel>
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
            <div className="rounded-md">
              <img
                src="https://images.unsplash.com/photo-1669672475334-d93fd9e151e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="rounded-md"
              />
            </div>
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
          </MyCarousel>
        </div>

        <div className="px-3 pt-1">
          <div className="flex items-center gap-2 ">
            <span className="p-1 text-[11px] leading-3 text-white bg-yellow-300 rounded-sm">
              Ad
            </span>
            <p className="leading-4 text-smallest-color text-[13.5px]">
              1 day ago Bashundhara, Dhaka
            </p>
            <button className="px-2 text-sm transition-all duration-300 border rounded-lg hover:text-white text-common-gray whitespace-nowrap hover:bg-common-gray">
              View Map
            </button>
          </div>
          <h2 className="overflow-hidden font-semibold whitespace-nowrap text-ellipsis text-heading-color">
            {" "}
            BHK Residential Apartment in Chandivali Apartment in Chandiva
          </h2>
          <h2 className="font-semibold text-heading-color">
            $ 27,000{" "}
            <span className="text-[13.5px] text-smallest-color italic">
              Not Negotiable
            </span>
          </h2>
        </div>

        <div className="p-3 m-3 border rounded-lg shadow-md">
          <span className="pl-3 text-smallest-color text-[13.5px]">
            Send seller a message{" "}
          </span>
          <div className="flex gap-2">
            <input
              className="pl-3 bg-gray-300 border rounded-md placeholder:text-heading-color placeholder:font-semibold"
              placeholder="Is this still available?"
              type="text"
            />
            <button className="py-[8px] px-4 text-white border rounded-md bg-common-color">
              Send
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5 px-2 py-4 my-3 overflow-x-scroll overflow-y-hidden text-sm tracking-tight flex-nowrap text-common-gray">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-black rounded-full bg-smallest-color">
              <BsTelephone size={36} />
            </div>
            <span className="w-[40px] leading-3 text-center">Call Seller</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-black rounded-full bg-smallest-color">
              <FaPeopleCarry size={36} />
            </div>
            <span className="w-[40px] leading-3 text-center">Order now</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-black rounded-full bg-smallest-color">
              <BsPinterest size={36} />
            </div>
            <span className="w-[40px] leading-3 text-center">Send Offer</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-black rounded-full bg-smallest-color">
              <BsFillChatDotsFill size={36} />
            </div>
            <span className="w-[40px] leading-3 text-center">Chat/ Msg</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-black rounded-full bg-smallest-color">
              <RiMailSendFill size={36} />
            </div>
            <span className="w-[40px] leading-3 text-center">Send Biodata</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-black rounded-full bg-smallest-color">
              <FaEye size={36} />
            </div>
            <span className="w-[40px] leading-3 text-center">See Code</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-black rounded-full bg-smallest-color">
              <BsFillTelephoneInboundFill size={36} />
            </div>
            <span className="w-[40px] leading-3 text-center">
              Callback Request
            </span>
          </div>
        </div>

        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>

        <div className="flex items-center justify-between mx-3">
          <div className="flex items-center gap-2">
            <img
              className="w-[50px] h-[50px] rounded-full object-cover"
              alt=""
              src="/cover.jpg"
            />
            <div>
              <div className="flex items-center ">
                <h2 className=" overflow-hidden leading-3 whitespace-nowrap w-[120px]  relative text-ellipsis">
                  Karuna Real Estate{" "}
                </h2>

                <span
                  className="ease-in-out cursor-pointer text-common-color"
                  data-bs-toggle="tooltip"
                  title="5 star seller"
                >
                  <AiFillCheckCircle />
                </span>
              </div>
              <p className="italic leading-5">
                5{" "}
                <span className="inline-block ml-[-2px] ">
                  {" "}
                  <BiStar />
                </span>{" "}
                Seller
              </p>
              <p className="italic leading-3 whitespace-nowrap max-sm:w-[120px] overflow-hidden max-sm:text-ellipsis text-smallest-color text-[13.5px]">
                11520 people connected
              </p>
            </div>
          </div>
          <div>
            <button className="px-2 text-blue-500 border rounded-md whitespace-nowrap">
              View Shop
            </button>
          </div>
        </div>

        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>

        <div className="px-3">
          <div className="flex justify-between ">
            <span className=" rounded-md text-heading-color font-[500]">
              Details
            </span>
            <div
              className="cursor-pointer"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? (
                <BiChevronUp size={25} />
              ) : (
                <BiChevronDown size={25} />
              )}
            </div>
          </div>
          {showDetails && (
            <div className="flex flex-wrap py-1 m-0 leading-3">
              <p className="pb-1 basis-1/2">
                Condition: <span className="text-blue-500"> Used,</span>{" "}
              </p>
              <p className="pb-1 basis-1/2">
                Brand: <span className="text-blue-500"> New</span>{" "}
              </p>
              <p className="pb-1 basis-1/2">
                Type: <span className="text-blue-500"> Hero</span>{" "}
              </p>
              <p className="pb-1 basis-1/2">
                Favorite:{" "}
                <span className="text-blue-500"> Cricket, Football</span>{" "}
              </p>
            </div>
          )}
          <div className="">
            <hr className="w-full h-2px bg-common-gray" />
          </div>
          <div className="">
            <div className="flex justify-between ">
              <span className=" rounded-md text-heading-color font-[500]">
                Details
              </span>
              <div
                className="cursor-pointer"
                onClick={() => setShowDes(!showDes)}
              >
                {showDes ? (
                  <BiChevronUp size={25} />
                ) : (
                  <BiChevronDown size={25} />
                )}
              </div>
            </div>
            {showDes && (
              <p className="text-sm ">
                - Inter H110 Express Chipset - Intel G4560 (7tel G4560 (7th
                Gen), Clock Speed 3.50GHz (3MB Cache...{" "}
                <Link href="#">See More </Link>{" "}
              </p>
            )}
          </div>
          <div className="px-2 my-2">
            <hr className="w-full h-2px bg-common-gray" />
          </div>
          <div className="">
            <div className="flex justify-between font-bold ">
              <span className=" rounded-md text-heading-color font-[500]">
                Shipping & Returns
              </span>
              <div
                className="cursor-pointer"
                onClick={() => setShowShipping(!showShipping)}
              >
                {showShipping ? (
                  <BiChevronUp size={25} />
                ) : (
                  <BiChevronDown size={25} />
                )}
              </div>
            </div>
            {showShipping && (
              <>
                <div className="flex items-center gap-2 text-sm">
                  <div>
                    <FaTruckMoving />
                  </div>
                  <p>This Merchant can ship to BD</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div>
                    <FaTruckMoving />
                  </div>
                  <p>This Merchant can ship to BD</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div>
                    <FaTruckMoving />
                  </div>
                  <p>This Merchant can ship to BD</p>
                </div>
              </>
            )}
          </div>

          <div className="px-2 my-2">
            <hr className="w-full h-2px bg-common-gray" />
          </div>

          <div className="">
            <div className="flex items-center gap-2 py-1 text-sm font-bold border-b mbs-1">
              <div className="basis-1/5"></div>

              <p className="basis-1/5 text-heading-color font-[500]">Bidder</p>
              <p className="basis-1/5 text-heading-color font-[500]">Date</p>
              <p className="basis-1/5 text-heading-color font-[500]">Time</p>
              <p className="basis-1/5 text-heading-color font-[500] whitespace-nowrap">
                Unit Price
              </p>
            </div>

            <div className="flex items-center gap-2 py-1 mb-1 text-sm font-semibold border-b text-common-gray">
              <div className="basis-1/5">
                <img
                  src="/cover.jpg"
                  className="w-[40px] h-[40px] object-cover rounded-md"
                />
              </div>

              <p className="basis-1/5">name</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">3379</p>
            </div>
            <div className="flex items-center gap-2 py-1 mb-1 text-sm font-semibold border-b text-common-gray">
              <div className="basis-1/5">
                <img
                  src="/cover.jpg"
                  className="w-[40px] h-[40px] object-cover rounded-md"
                />
              </div>

              <p className="basis-1/5">name</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">3379</p>
            </div>
          </div>
        </div>

        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>

        <div className="px-3">
          <DownCarousel />
        </div>
      </div>
    </main>
  );
};

export default Add;
