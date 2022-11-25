import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const CatBtn = () => {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);
  const handleChange = (a: number, b: any) => {
    if (a > 1) {
      setHidePrev(false);
    } else {
      setHidePrev(true);
    }
    if (a == b._owner.index - 2) {
      setHideNext(true);
    } else {
      setHideNext(false);
    }
  };
  const options = {
    showThumbs: false,
    centerMode: true,
    showIndicators: false,
    selectedItem: 1,
    centerSlidePercentage: 33,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[65px] bg-common-color p-2 rounded-full left-0 z-10 translate-y-[-50%] cursor-pointer text-white ${
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
          className={`arrow-right absolute top-[65px] bg-common-color p-2 rounded-full right-0 z-100 translate-y-[-50%] cursor-pointer text-white ${
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
    <Carousel {...options} className="bg-white  rounded-md relative p-1">
      <div className="p-2">
        <img
          src="/cover.jpg"
          className="rounded-md w-[120] h-[120px] object-cover"
        />
        <p className="whitespace-nowrap text-ellipsis relative overflow-hidden fnt-semibold p-1 leading-3 pt-3">
          Pant with Black color thei en ieeo fo ie
        </p>
        <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 font-semibold">
          <h2 className="font-bold">$ 256</h2>
          <div className="flex gap-2 items-center justify-center">
            <GoLocation />
            <span>Dhaka</span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <img
          src="/cover.jpg"
          className="rounded-md w-[120] h-[120px] object-cover"
        />
        <p className="whitespace-nowrap text-ellipsis relative overflow-hidden fnt-semibold p-1 leading-3 pt-3">
          Pant with Black color thei en ieeo fo ie
        </p>
        <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 font-semibold">
          <h2 className="font-bold">$ 256</h2>
          <div className="flex gap-2 items-center justify-center">
            <GoLocation />
            <span>Dhaka</span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <img
          src="/cover.jpg"
          className="rounded-md w-[120] h-[120px] object-cover"
        />
        <p className="whitespace-nowrap text-ellipsis relative overflow-hidden fnt-semibold p-1 leading-3 pt-3">
          Pant with Black color thei en ieeo fo ie
        </p>
        <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 font-semibold">
          <h2 className="font-bold">$ 256</h2>
          <div className="flex gap-2 items-center justify-center">
            <GoLocation />
            <span>Dhaka</span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <img
          src="/cover.jpg"
          className="rounded-md w-[120] h-[120px] object-cover"
        />
        <p className="whitespace-nowrap text-ellipsis relative overflow-hidden fnt-semibold p-1 leading-3 pt-3">
          Pant with Black color thei en ieeo fo ie
        </p>
        <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 font-semibold">
          <h2 className="font-bold">$ 256</h2>
          <div className="flex gap-2 items-center justify-center">
            <GoLocation />
            <span>Dhaka</span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <img
          src="/cover.jpg"
          className="rounded-md w-[120] h-[120px] object-cover"
        />
        <p className="whitespace-nowrap text-ellipsis relative overflow-hidden fnt-semibold p-1 leading-3 pt-3">
          Pant with Black color thei en ieeo fo ie
        </p>
        <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 font-semibold">
          <h2 className="font-bold">$ 256</h2>
          <div className="flex gap-2 items-center justify-center">
            <GoLocation />
            <span>Dhaka</span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <img
          src="/cover.jpg"
          className="rounded-md w-[120] h-[120px] object-cover"
        />
        <p className="whitespace-nowrap text-ellipsis relative overflow-hidden fnt-semibold p-1 leading-3 pt-3">
          Pant with Black color thei en ieeo fo ie
        </p>
        <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 font-semibold">
          <h2 className="font-bold">$ 256</h2>
          <div className="flex gap-2 items-center justify-center">
            <GoLocation />
            <span>Dhaka</span>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CatBtn;
