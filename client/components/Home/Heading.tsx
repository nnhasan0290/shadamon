import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="bg-common-bg"> 
      <div className="flex justify-center items-center border-b border-b-[#dee2e6] ">
        <div className="w-[250px]">
          <img
            src="https://sadamon-pszqszegs-saifulislamsojib.vercel.app/_next/static/media/shadamon-small-logo.1067817a.png"
            width="132px"
            height="100%"
            alt="logo"
          />
        </div>
        <div className="w-[515px] nav__item flex">
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
        <div className="w-[210px] flex items-center gap-2">
          <button className="nav__icon">en</button>
          <div className="nav__icon">
            <FaEnvelope />
          </div>
          <button className="px-2 py-1 font-medium text-white uppercase rounded-full text-[13px] cursor-pointer bg-common-color">post add</button>
          <div className="nav__icon">
            <GoChevronDown />
          </div>
        </div>
      </div>
      <div className="w-[515px] nav__item flex font-normal text-common-gray mx-auto items-center gap-2 pl-5">
          <div className="p-2 my-1 w-auto rounded-md nav__icon">
            <Link href="#"> All Adds</Link>
          </div>
          <div className="p-2 my-1 w-auto rounded-md nav__icon">
            <Link href="#"> Loan</Link>
          </div>
          <div className="p-2 my-1 w-auto rounded-md nav__icon">
            <Link href="#"> Offer</Link>
          </div>
          <div className="p-2 my-1 w-auto rounded-md nav__icon">
            <Link href="#"> Bid</Link>
          </div>
        </div>
    </div>
  );
};

export default Heading;
