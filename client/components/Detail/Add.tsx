import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
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
import { useRouter } from "next/router";
import { GlobalStates } from "../../context/ContextProvider";
import MyCarousel from "./MyCarousel";

const Add = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const { dispatch } = GlobalStates();
  const handleChange = (a: number, b: any) => {
    setSelected(a);
  };
  return (
    <main className=" bg-white rounded-md sm:w-[500px] w-full sm:p-2 ">
      <div className="border">
        <div className="relative ">
          {/* <div className="absolute z-10 p-2 ml-auto text-sm bg-white top-2 left-2 border-x-4 border-x-common-color">
            <h2 className="text-lg leading-3">URGENT</h2>
            <p className="text-common-gray">Sell Product</p>
          </div> */}
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

        <div className="px-3 ">
          <div className="flex items-center gap-2 ">
            <span className="p-1 text-xs leading-3 text-white bg-yellow-300 rounded-md">
              Ad
            </span>
            <p className="leading-4">1 day ago Bashundhara, Dhaka</p>
            <button className="px-2 font-bold border rounded-lg whitespace-nowrap">
              View More
            </button>
          </div>
          <h2 className="font-bold">
            {" "}
            BHK Residential Apartment in Chandivali Apartment in Chandiva
          </h2>
          <h2 className="font-bold">$ 27,000</h2>
        </div>

        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>

        <div className="p-3 m-3 border rounded-lg shadow-md">
          <span className="pl-3 font-semibold">Send seller a message </span>
          <div className="flex">
            <input
              className="pl-3 bg-gray-300 border rounded-full placeholder:text-common-gray"
              placeholder="Is this still available?"
              type="text"
            />
            <button className="px-2 text-white border rounded-md bg-common-color">
              Send
            </button>
          </div>
        </div>

        <div className="flex items-center justify-around gap-3 overflow-x-scroll overflow-y-hidden text-sm tracking-tight flex-nowrap text-common-gray">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-white rounded-full bg-common-color">
              <BsTelephone size={22} />
            </div>
            <span className="w-[40px] leading-3 text-center">Call Seller</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-white rounded-full bg-common-color">
              <FaPeopleCarry size={22} />
            </div>
            <span className="w-[40px] leading-3 text-center">Order now</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-white rounded-full bg-common-color">
              <BsPinterest size={22} />
            </div>
            <span className="w-[40px] leading-3 text-center">Send Offer</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-white rounded-full bg-common-color">
              <BsFillChatDotsFill size={22} />
            </div>
            <span className="w-[40px] leading-3 text-center">Chat/ Msg</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-white rounded-full bg-common-color">
              <RiMailSendFill size={22} />
            </div>
            <span className="w-[40px] leading-3 text-center">Send Biodata</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-white rounded-full bg-common-color">
              <FaEye size={22} />
            </div>
            <span className="w-[40px] leading-3 text-center">See Code</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="p-2 text-white rounded-full bg-common-color">
              <BsFillTelephoneInboundFill size={22} />
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
              <h2 className="flex text-lg font-semibold leading-3">
                Karuna Real Estate{" "}
                <span className="text-common-color">
                  <AiFillCheckCircle />
                </span>
              </h2>
              <p className="italic font-semibold leading-5">5 Seller</p>
              <p className="italic leading-3 text-common-gray">
                11520 people are connected
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
          <div className="flex justify-between font-bold">
            <div className="flex items-center gap-2">
              <button className="px-2 border rounded-md">Detail</button>
              <h2>Shipping, Returns & Safety</h2>
            </div>
            <div>
              <BiChevronDown size={25} />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 py-3 m-0 text-sm leading-3">
            <p className="">Condition: Used,</p>
            <p className="">Condition: Used,</p>
            <p className="">Condition: Used,</p>
            <p className="">Condition: Used,</p>
            <p className="">Condition: Used,</p>
          </div>
          <div className="">
            <hr className="w-full h-2px bg-common-gray" />
          </div>
          <div className="">
            <h2 className="font-bold">Description</h2>
            <p className="text-sm ">
              - Inter H110 Express Chipset - Intel G4560 (7tel G4560 (7th Gen),
              Clock Speed 3.50GHz (3MB Cache... <Link href="#">See More </Link>{" "}
            </p>
          </div>
          <div className="px-2 my-2">
            <hr className="w-full h-2px bg-common-gray" />
          </div>
          <div className="">
            <div className="flex justify-between font-bold ">
              <div className="">
                <h2>Shipping & Returns </h2>
              </div>
              <div>
                <BiChevronDown size={25} />
              </div>
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
            <div className="flex items-center gap-2 text-sm">
              <div>
                <FaTruckMoving />
              </div>
              <p>This Merchant can ship to BD</p>
            </div>
          </div>

          <div className="px-2 my-2">
            <hr className="w-full h-2px bg-common-gray" />
          </div>

          <div className="">
            <div className="flex justify-between font-bold border-b">
              <h2>People Bidding </h2>
            </div>

            <div className="flex items-center gap-2 py-1 text-sm font-bold border-b mbs-1">
              <div className="basis-1/5"></div>

              <p className="basis-2/5">Bidder</p>
              <p className="basis-1/5">Date</p>
              <p className="basis-1/5">Time</p>
              <p className="basis-1/5">Unit Price</p>
            </div>

            <div className="flex items-center gap-2 py-1 mb-1 text-sm font-semibold border-b text-common-gray">
              <div className="basis-1/5">
                <img
                  src="/cover.jpg"
                  className="w-[40px] h-[40px] object-cover "
                />
              </div>

              <p className="basis-2/5">_3849348494833</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">3379</p>
            </div>
            <div className="flex items-center gap-2 py-1 mb-1 text-sm font-semibold border-b text-common-gray">
              <div className="basis-1/5">
                <img
                  src="/cover.jpg"
                  className="w-[40px] h-[40px] object-cover "
                />
              </div>

              <p className="basis-2/5">_3849348494833</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">3379</p>
            </div>
          </div>
        </div>

        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>

        <div className="p-3">
          <DownCarousel />
        </div>
      </div>
    </main>
  );
};

export default Add;
