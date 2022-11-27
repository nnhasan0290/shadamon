import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight, BsExclamation } from "react-icons/bs";
import { useState } from "react";
import {AiFillCheckCircle} from "react-icons/ai";
import { FaFacebook, FaHands } from "react-icons/fa";
import { BiCar, BiCategory, BiHeartCircle, BiShare } from "react-icons/bi";
import { FcElectronics } from "react-icons/fc";
import {BiChevronDown} from "react-icons/bi";
import {FaTruckMoving, FaPeopleCarry,FaEye} from "react-icons/fa";
import {BsTelephone, BsPinterest,BsFillTelephoneInboundFill, BsFillChatDotsFill} from "react-icons/bs";
import {RiMailSendFill} from "react-icons/ri";
import Link from "next/link"
import DownCarousel from "./DownCarousel";
import {useRouter} from "next/router";

const Add = () => {
const router = useRouter();
  const [selected, setSelected] = useState(0);
  const handleChange = (a: number, b: any) => {
    setSelected(a);
  };
  const options = {
    showStatus: false,
    showIndicators: false,
    selectedItem: 0,
    onChange: handleChange,
  };
  return (
    <main className=" bg-white rounded-md sm:w-[500px] w-full overflow-hidden sm:p-2 ">
      <div className="border">
        <div className="relative ">
          <div className="absolute top-2 right-2 p-2 ml-auto text-xl nav__icon z-10 " onClick={() => {router.push("/")}}>
            <svg
              className="h-[25px] w-[25px] "
              fill="#5a5a5a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
          <div className="absolute top-2 left-2 p-2 ml-auto text-sm bg-white border-x-4 border-x-common-color  z-10">
            <h2 className="text-lg leading-3">URGENT</h2>
            <p className="text-common-gray">Sell Product</p>
          </div>
          <Carousel
            {...options}
            className="  rounded-md relative pb-3  font-bold overflow-visible"
          >
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
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
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
          </Carousel>
        </div>

        

        <div className="px-3 ">
           <div className="flex gap-2 items-center ">
              <span className="leading-3 text-xs bg-yellow-300 text-white p-1 rounded-md">
                Ad
             </span>
             <p className="leading-4">1 day ago Bashundhara, Dhaka</p>
             <button className="border font-bold rounded-lg px-2 whitespace-nowrap">View More</button>
           </div>
           <h2 className="font-bold"> BHK Residential Apartment in Chandivali Apartment in Chandiva</h2>
           <h2 className="font-bold">$ 27,000</h2>
        </div>

        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>

        <div className="shadow-md p-3 m-3 rounded-lg border">
          <span className="font-semibold pl-3">Send seller a message </span>
          <div className="flex">
            <input className="border rounded-full placeholder:text-common-gray pl-3 bg-gray-300" placeholder="Is this still available?" type="text"/>
            <button className="border bg-common-color text-white px-2 rounded-md">Send</button>
          </div>
         </div>


          <div className="text-sm tracking-tight flex gap-3 items-center flex-wrap justify-around text-common-gray">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="bg-common-color text-white p-2 rounded-full">
               <BsTelephone size={22}/>
              </div>
              <span className="w-[40px] leading-3 text-center">Call Seller</span>
            </div>
             <div className="flex flex-col items-center justify-center gap-1">
              <div className="bg-common-color text-white p-2 rounded-full">
               <FaPeopleCarry size={22}/>
              </div>
              <span className="w-[40px] leading-3 text-center">Order now</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="bg-common-color text-white p-2 rounded-full">
               <BsPinterest size={22}/>
              </div>
              <span className="w-[40px] leading-3 text-center">Send Offer</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="bg-common-color text-white p-2 rounded-full">
               <BsFillChatDotsFill size={22}/>
              </div>
              <span className="w-[40px] leading-3 text-center">Chat/ Msg</span>
            </div>


            <div className="flex flex-col items-center justify-center gap-1">
              <div className="bg-common-color text-white p-2 rounded-full">
               <RiMailSendFill size={22}/>
              </div>
              <span className="w-[40px] leading-3 text-center">Send Biodata</span>
            </div>


             <div className="flex flex-col items-center justify-center gap-1">
              <div className="bg-common-color text-white p-2 rounded-full">
               <FaEye  size={22}/>
              </div>
              <span className="w-[40px] leading-3 text-center">See Code</span>
            </div>
             <div className="flex flex-col items-center justify-center gap-1">
              <div className="bg-common-color text-white p-2 rounded-full">
               <BsFillTelephoneInboundFill size={22}/>
              </div>
              <span className="w-[40px] leading-3 text-center">Callback Request</span>
            </div>
          </div>

           <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
           </div>

 
         <div className="mx-3 flex items-center justify-between">
           <div className="flex gap-2 items-center">
             <img className="w-[50px] h-[50px] rounded-full object-cover" alt="" src="/cover.jpg" />
             <div>
               <h2 className="leading-3 text-lg font-semibold flex">Karuna Real Estate <span className="text-common-color"><AiFillCheckCircle/></span></h2>
                <p className="leading-5 font-semibold italic">5 Seller</p>
                <p className="leading-3 text-common-gray italic">11520 people are connected</p>
             </div>
           </div>
           <div>
              <button className="border rounded-md text-blue-500 px-2 whitespace-nowrap">View Shop</button>
           </div>
         </div>
 
          <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
           </div>


          <div className="px-3">
            <div className="flex justify-between font-bold">
              <div className="flex gap-2 items-center">
               <button className="border px-2 rounded-md">Detail</button>
               <h2>Shipping, Returns & Safety</h2>
              </div>
              <div><BiChevronDown size={25}/></div>
            </div>
            <div className="flex flex-wrap gap-3 py-3 text-sm leading-3 m-0">
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
             <p className="text-sm ">- Inter H110 Express Chipset - Intel G4560 (7tel G4560 (7th Gen), Clock Speed 3.50GHz (3MB Cache... <Link href="#">See More </Link> </p>
           </div>
             <div className="my-2 px-2">
            <hr className="w-full h-2px bg-common-gray" />
           </div>
           <div className="">
            <div className="flex justify-between font-bold ">
              <div className="">
               <h2>Shipping & Returns </h2>
              </div>
              <div><BiChevronDown size={25}/></div>
            </div>
            <div className="flex items-center gap-2  text-sm">
              <div><FaTruckMoving/></div>
              <p>This Merchant can ship to BD</p>
            </div>
             <div className="flex items-center gap-2  text-sm">
              <div><FaTruckMoving/></div>
              <p>This Merchant can ship to BD</p>
            </div>
            <div className="flex items-center gap-2  text-sm">
              <div><FaTruckMoving/></div>
              <p>This Merchant can ship to BD</p>
            </div>
           </div>

        <div className="my-2 px-2">
            <hr className="w-full h-2px bg-common-gray" />
           </div>

          <div className="">
            <div className="flex justify-between font-bold border-b">
               <h2>People Bidding </h2>
              
            </div>

           <div className="flex items-center gap-2  text-sm mbs-1 font-bold border-b py-1">
             <div className="basis-1/5">
              
             </div>
              
              <p className="basis-2/5">Bidder</p>
              <p className="basis-1/5">Date</p>
              <p className="basis-1/5">Time</p>
              <p className="basis-1/5">Unit Price</p>
            </div>

            <div className="flex items-center gap-2  text-sm mb-1 border-b py-1 font-semibold text-common-gray">
             <div className="basis-1/5">
               <img src="/cover.jpg" className="w-[40px] h-[40px] object-cover "/>
             </div>
              
              <p className="basis-2/5">_3849348494833</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">3379</p>
            </div>
             <div className="flex items-center gap-2  text-sm mb-1 border-b py-1 font-semibold text-common-gray">
             <div className="basis-1/5">
               <img src="/cover.jpg" className="w-[40px] h-[40px] object-cover "/>
             </div>
              
              <p className="basis-2/5">_3849348494833</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">01/01/22</p>
              <p className="basis-1/5">3379</p>
            </div>
           
           
           </div>

       
         </div>


        
        <div className="my-2 px-2">
            <hr className="w-full h-2px bg-common-gray" />
           </div>

        <div className="p-3">
          <DownCarousel />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <div className="border rounded-full bg-muted-color">
            <BsExclamation size={25} />
          </div>
          <div className="border rounded-full ">
            <FaFacebook size={25} />
          </div>
          <div className="border text-white px-3 py-1 rounded-full bg-black cursor-pointer">
            <span>Close Detail</span>
          </div>
          <div className="border rounded-full bg-muted-color">
            <BiHeartCircle size={25} />
          </div>
          <div className="border rounded-full bg-muted-color">
            <BiShare size={25} />
          </div>
        </div>
        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>
      </div>
    </main>
  );
};

export default Add;
