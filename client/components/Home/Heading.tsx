import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import { GlobalStates } from "../../context/ContextProvider";
import { useSession } from "next-auth/react";
import { BiChevronDown, BiEnvelope, BiHome, BiSearch } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState, useCallback } from "react";
import {useRouter} from "next/router";

const Heading = () => {
  //states
  const { showModal, setShowModal } = GlobalStates();
  const [y, setY] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);
  const router = useRouter();

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollTop(true);
      } else if (y < window.scrollY) {
        setScrollTop(false);
      }
      setY(window.scrollY);
    },
    [y]
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <div
        className={`sticky top-0 z-50 lg:bg-common-bg transition-full duration-300 bg-body-bg ${
          !scrollTop && "translate-y-[-100%] lg:translate-y-0"
        }`}
      >
        <div className="flex gap-[50px] sm:w-[500px] w-full p-1 lg:w-auto  lg:justify-center justify-between mx-auto items-center lg:border-b lg:border-b-[#dee2e6] border-0 py-2 lg:py-0">
          <div className="w-[250px] lg:pl-5 flex items-center cursor-pointer" onClick ={() => router.push("/")}>
            <img src="/head-logo.png" width="132px" height="100%" alt="logo" />
            <div className="border-l-[2px] border-common-gray pl-1 ml-1 border-l flex flex-col mb-[-12px] lg:hidden">
             <span className="leading-[8px] text-[12px] font-bold">546534</span>
             <span className="leading-3 text-[9px]">Result</span>
             </div>
          </div>
          <div className="w-[500px] nav__item  lg:flex hidden">
            <div className="p-2 active">
              <Link href="#"> All Adds</Link>
            </div>
            <div className="p-2">
              <Link href="#"> Loan</Link>
            </div>
            <div className="p-2">
              <Link href="#"> Offer</Link>
            </div>
            <div className="p-2">
              <Link href="#"> Bid</Link>
            </div>
          </div>
          <div className="w-[180px] flex items-center justify-end gap-1">
            <button className="nav__icon">en</button>
            <div className="nav__icon active">
              <FaEnvelope />
            </div>
            <div>
              <button
                className="px-1 py-1 font-medium tracking-tight text-white whitespace-nowrap uppercase rounded-full text-[13px] hidden lg:block cursor-pointer bg-common-color"
                onClick={() => setShowModal(!showModal)}
              >
                post add
              </button>
            </div>
            <div className="nav__icon">
              <GoChevronDown />
            </div>
          </div>
        </div>
        <div className="hidden justify-center lg:border-b lg:border-b-[#dee2e6]">
          <div className="w-[250px]"></div>
          <div className="w-[500px] nav__item lg:flex hidden text-common-gray  items-center gap-2 font-semibold text-[1rem]">
            <div className="w-auto p-2 my-1 rounded-md nav__icon text-common-color">
              <Link href="#"> All Products</Link>
            </div>
            <div className="w-auto p-2 my-1 rounded-md nav__icon">
              <Link href="#"> All Orders</Link>
            </div>
            <div className="w-auto p-2 my-1 rounded-md nav__icon">
              <Link href="#"> My Page</Link>
            </div>
            <div className="w-auto p-2 my-1 rounded-md nav__icon">
              <Link href="#"> Promote</Link>
            </div>
          </div>
          <div className="w-[160px]"></div>
        </div>
      </div>
      <div
        className={` bg-white items-center max-w-[500px] border lg:hidden rounded-t-[30px]  fixed bottom-0 z-50  w-full left-[50%] translate-x-[-50%] text-center
       transition-all duration-300 ${!scrollTop && "translate-y-[100%]"}`}
      >
        <div className=" justify-center rounded-full hidden ">
          <div className="basis-[30%] flex px-2 pt-1 rounded-full justify-around   bg-white  ">
            <div className="flex items-center justify-center flex-col">
              <div className="nav__icon text-black ">
                <BiHome size={22} />
              </div>
              <span className="leading-3 tracking-tight text-sm font-semibold text-common-gray">
                Post
              </span>
            </div>
            <div className="flex items-center justify-center flex-col">
              <div className="nav__icon text-black">
                <BiHome size={22} />
              </div>
              <span className="leading-3 tracking-tight text-sm font-semibold text-common-gray">
                Post
              </span>
            </div>
          </div>
          <div className=" rounded-full mt-[-5px] ">
            <div className=" flex items-center justify-center rounded-full  w-[35px] h-[35px] nav__icon border-common-gray border text-black">
              <BiChevronDown className="font-bold" size={25} />
            </div>
          </div>
          <div className="basis-[30%] flex px-2 pt-1 rounded-full justify-around bg-white ">
            <div className="flex items-center justify-center flex-col">
              <div className="nav__icon text-black">
                <BiEnvelope size={22} />
              </div>
              <span className="leading-3 tracking-tight text-sm font-semibold text-common-gray">
                Page
              </span>
            </div>
            <div className="flex items-center justify-center flex-col">
              <div className="nav__icon text-black">
                <CgProfile size={22} />
              </div>
              <span className="leading-3 tracking-tight text-sm font-semibold text-common-gray">
                Promote
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-[#747474]">
         
           <div className="basis-full flex rounded-full  sm:justify-around justify-center gap-2 sm:gap-0 border-t-2 border-t-common-gray bg-white self-end pr-2 ">
           
             <div className=" px-2 text-black bg-gray-300 flex flex-col items-center justify-center py-1 rounded-b-2xl">
              <BiHome size={25} />
              <span className="text-xs leading-3">Home</span>
            </div>
            <div className=" px-2 flex flex-col items-center justify-center py-1 rounded-b-2xl">
              <BiSearch size={25} />
              <span className="text-xs leading-3">Search</span>
            </div>
          </div>
          <div className="border-b-2 border-b-common-gray rounded-b-full p-2 pt-0 rounded-md">
            <div className=" flex items-center justify-center px-2 rounded-full  w-[37px] h-[37px] bg-common-color text-white ">
              <BsPlusLg className="font-bold" size={35} />
            </div>
          </div>
          <div className="basis-full flex rounded-full  sm:justify-around justify-center gap-2 sm:gap-0 border-t-2 border-t-common-gray bg-white self-end pr-2 ">
           
             <div className=" px-2 flex flex-col items-center justify-center py-1 rounded-b-2xl">
              <BiEnvelope size={25} />
              <span className="text-xs leading-3">Message</span>
            </div>
            <div className=" px-2 flex flex-col items-center justify-center py-1 rounded-b-2xl">
              <CgProfile size={25} />
              <span className="text-xs leading-3">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
