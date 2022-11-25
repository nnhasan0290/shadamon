import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const NvtStop = () => {
  const [hidePrev, setHidePrev] = useState(false);
  const [hideNext, setHideNext] = useState(false);
  const handleChange = (a: number, b: any) => {
    // if (a > 1) {
    //   setHidePrev(false);
    // } else {
    //   setHidePrev(true);
    // }
    // if (a == b._owner.index - 1) {
    //   setHideNext(true);
    // } else {
    //   setHideNext(false);
    // }
  };
  const options = {
    showThumbs: false,
    centerMode: true,
    showIndicators: false,
    selectedItem: 0,
    centerSlidePercentage: 70,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[110px] bg-common-color p-2 rounded-full left-0 z-10 translate-y-[-50%] cursor-pointer text-white ${
            hidePrev && "hidden"
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
          className={`arrow-right absolute top-[110px] bg-common-color p-2 rounded-full right-0 z-100 translate-y-[-50%] cursor-pointer text-white ${
            hideNext && "hidden"
          }`}
          onClick={clickHandler}
        >
          <BsArrowRight size={23} />
        </span>
      );
    },
  };
  return (
    <Carousel {...options} className="  rounded-md relative mr-2">
      <div className="relative h-[350px] mr-2">
        <img src="/cover.jpg" className="rounded-md h-[250px] object-cover" />
        <div className="absolute  w-[65px] bg-white h-[65px] flex items-center justify-center rounded-full tracking-tighter text-md italic font-semibold m-2 top-[120px] left-[45px] leading-3 ">
          <h2>Stopping by the Woods</h2>
        </div>
        <svg
          width="309"
          height="102"
          viewBox="0 0 309 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" absolute top-[160px] left-[50%] translate-x-[-50%] rounded-md h-[105px] "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.5 38C92.2107 38 109 21.2107 109 0.5C109 0.333076 108.999 0.166409 108.997 0H309V102H0V0H34.0033C34.0011 0.166409 34 0.333076 34 0.5C34 21.2107 50.7893 38 71.5 38Z"
            fill="white"
          ></path>
        </svg>
        <div className="bg-white rounded-md w-[308px] text-start px-8  absolute top-[220px] left-[50%] translate-x-[-50%] h-[110px] flex flex-col gap-1">
          <h2 className="font-bold text-lg leading-4">
            NVT Stopping by The Woods
          </h2>
          <p className="leading-4 font-semibold text-common-gray text-sm">
            4 BHK Independent House/Villa, Whitefield, Banglalore east
          </p>
          <h2 className="font-bold text-lg leading-4"> $ 2.02 - 2.92 Cr</h2>
        </div>
      </div>
      <div className="relative h-[350px] mr-2">
        <img src="/cover.jpg" className="rounded-md h-[250px] object-cover" />
        <div className="absolute  w-[65px] bg-white h-[65px] flex items-center justify-center rounded-full tracking-tighter text-md italic font-semibold m-2 top-[120px] left-[45px] leading-3 ">
          <h2>Stopping by the Woods</h2>
        </div>
        <svg
          width="309"
          height="102"
          viewBox="0 0 309 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" absolute top-[160px] left-[50%] translate-x-[-50%] rounded-md h-[105px] "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.5 38C92.2107 38 109 21.2107 109 0.5C109 0.333076 108.999 0.166409 108.997 0H309V102H0V0H34.0033C34.0011 0.166409 34 0.333076 34 0.5C34 21.2107 50.7893 38 71.5 38Z"
            fill="white"
          ></path>
        </svg>
        <div className="bg-white rounded-md w-[308px] text-start px-8  absolute top-[220px] left-[50%] translate-x-[-50%] h-[110px] flex flex-col gap-1">
          <h2 className="font-bold text-lg leading-4">
            NVT Stopping by The Woods
          </h2>
          <p className="leading-4 font-semibold text-common-gray text-sm">
            4 BHK Independent House/Villa, Whitefield, Banglalore east
          </p>
          <h2 className="font-bold text-lg leading-4"> $ 2.02 - 2.92 Cr</h2>
        </div>
      </div>
    </Carousel>
  );
};

export default NvtStop;
