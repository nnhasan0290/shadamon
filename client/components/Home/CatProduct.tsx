import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const CatProduct = () => {
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
    selectedItem: 1,
    centerSlidePercentage: 33,
    swipeScrollTolerance: 50,
    preventMovementUntilSwipeScrollTolerance: true,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[50%] bg-common-color p-2 rounded-full left-0   z-10 translate-y-[-50%] cursor-pointer text-white ${
            selected <= 1 && "hidden"
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
          className={`arrow-right absolute top-[50%] bg-common-color p-2 rounded-full right-0 translate-y-[-50%] cursor-pointer text-white ${
            selected >= 3 && "hidden"
          }`}
          onClick={clickHandler}
        >
          <BsArrowRight size={23} />
        </span>
      );
    },
  };
  return (
    <div className="bg-white rounded-md">
      <div className="font-semibold p-2 flex items-center justify-between">
        <h2 className="font-semibold text-sm">Electric & Electronics</h2>
        <h2>All Categories</h2>
      </div>
      <Carousel
        {...options}
        className="  rounded-md relative mr-2 overflow-visible"
      >
        <div className="p-2">
          <img
            src="/cover.jpg"
            className="rounded-md w-[120] h-[120px] object-cover"
          />
          <p className="whitespace-nowrap text-ellipsis relative overflow-hidden fnt-semibold p-1 leading-3 pt-3">
            Pant with Black color thei en ieeo fo ie
          </p>
          <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 ">
            <h2 className="whitespace-nowrap text-sm">$256</h2>
            <div className="flex sm:gap-2 items-center justify-center">
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
          <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 ">
            <h2 className="whitespace-nowrap text-sm">$256</h2>
            <div className="flex sm:gap-2 items-center justify-center">
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
          <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 ">
            <h2 className="whitespace-nowrap text-sm">$256</h2>
            <div className="flex sm:gap-2 items-center justify-center">
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
          <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 ">
            <h2 className="whitespace-nowrap text-sm">$256</h2>
            <div className="flex sm:gap-2 items-center justify-center">
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
          <div className="flex justify-between border-b leading-3 border-b-gray-300 p-1 ">
            <h2 className="whitespace-nowrap text-sm">$256</h2>
            <div className="flex sm:gap-2 items-center justify-center">
              <GoLocation />
              <span>Dhaka</span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CatProduct;
