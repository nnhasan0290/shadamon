import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import {useRouter} from "next/router";

const NvtStop = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const handleChange = (a: number, b: any) => {
    console.log(b);
    setSelected(a);
  };
  const options = {
    showThumbs: false,
    showStatus: false,
    centerMode: true,
    showIndicators: false,
    selectedItem: 0,
    centerSlidePercentage: 70,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[50%] bg-common-color p-2 rounded-full left-0  translate-x-[-50%] z-10 translate-y-[-50%] cursor-pointer text-white ${
            selected === 0 && "hidden"
          }`}
          onClick={clickHandler}
        >
          <BsArrowLeft size={23} />
        </span>
      );
    },
    renderArrowNext: (clickHandler: any, hasNext: any, label: any) => {
      return (
        <span
          className={`arrow-right absolute top-[50%] bg-common-color p-2 rounded-full right-0 translate-y-[-50%] cursor-pointer text-white translate-x-[50%] ${
            selected === 2 && "hidden"
          }`}
          onClick={clickHandler}
        >
          <BsArrowRight size={23} />
        </span>
      );
    },
  };
  return (
    <Carousel {...options} className="  rounded-md  mr-2  sm:mx-0 mx-5">
      <div className="relative mr-2 h-[320px] overflow-hidden cursor-pointer" onClick={() => router.push("/123")}>
        <img src="/cover.jpg" className="rounded-md h-[253px]  object-cover" />
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] w-[85%] nvt__carousel rounded-md  ">
          <img
            src="/cover.jpg"
            className="rounded-full absolute h-[65px] bg-white translate-y-[-50%] left-[39px]  top-0 border border-white"
          />
          <div className="absolute overflow-hidden w-full rounded-md">
            <svg
              width="309"
              height="102"
              viewBox="0 0 309 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" rounded-md overflow-hidden"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M71.5 38C92.2107 38 109 21.2107 109 0.5C109 0.333076 108.999 0.166409 108.997 0H309V102H0V0H34.0033C34.0011 0.166409 34 0.333076 34 0.5C34 21.2107 50.7893 38 71.5 38Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className=" absolute z-10 p-3 text-start my-10 bg-white">
            <h2 className="font-bold text-lg leading-4">
              NVT Stopping by The Woods
            </h2>
            <p className="leading-4 font-semibold hidden sm:block text-common-gray text-sm">
              4 BHK Independent House/Villa, Whitefield, Banglalore east
            </p>
            <h2 className="font-bold text-lg leading-4"> $ 2.02 - 2.92 Cr</h2>
          </div>
        </div>
      </div>
      <div className="relative mr-2 h-[320px] overflow-hidden">
        <img src="/cover.jpg" className="rounded-md h-[253px]  object-cover" />
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] w-[85%] nvt__carousel rounded-md  ">
          <img
            src="/cover.jpg"
            className="rounded-full absolute h-[65px] bg-white translate-y-[-50%] left-[39px]  top-0 border border-white"
          />
          <div className="absolute overflow-hidden w-full rounded-md">
            <svg
              width="309"
              height="102"
              viewBox="0 0 309 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" rounded-md overflow-hidden"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M71.5 38C92.2107 38 109 21.2107 109 0.5C109 0.333076 108.999 0.166409 108.997 0H309V102H0V0H34.0033C34.0011 0.166409 34 0.333076 34 0.5C34 21.2107 50.7893 38 71.5 38Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className=" absolute z-10 p-3 text-start my-10 bg-white">
            <h2 className="font-bold text-lg leading-4">
              NVT Stopping by The Woods
            </h2>
            <p className="leading-4 font-semibold hidden sm:block text-common-gray text-sm">
              4 BHK Independent House/Villa, Whitefield, Banglalore east
            </p>
            <h2 className="font-bold text-lg leading-4"> $ 2.02 - 2.92 Cr</h2>
          </div>
        </div>
      </div>
      <div className="relative mr-2 h-[320px] overflow-hidden">
        <img src="/cover.jpg" className="rounded-md h-[253px]  object-cover" />
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] w-[85%] nvt__carousel rounded-md  ">
          <img
            src="/cover.jpg"
            className="rounded-full absolute h-[65px] bg-white translate-y-[-50%] left-[39px]  top-0 border border-white"
          />
          <div className="absolute overflow-hidden w-full rounded-md">
            <svg
              width="309"
              height="102"
              viewBox="0 0 309 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" rounded-md overflow-hidden"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M71.5 38C92.2107 38 109 21.2107 109 0.5C109 0.333076 108.999 0.166409 108.997 0H309V102H0V0H34.0033C34.0011 0.166409 34 0.333076 34 0.5C34 21.2107 50.7893 38 71.5 38Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className=" absolute z-10 p-3 text-start my-10 bg-white">
            <h2 className="font-bold text-lg leading-4">
              NVT Stopping by The Woods
            </h2>
            <p className="leading-4 font-semibold hidden sm:block text-common-gray text-sm">
              4 BHK Independent House/Villa, Whitefield, Banglalore east
            </p>
            <h2 className="font-bold text-lg leading-4"> $ 2.02 - 2.92 Cr</h2>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default NvtStop;
