import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const ConnectSlider = () => {
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
    centerSlidePercentage: 43,
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
            selected === 3 && "hidden"
          }`}
          onClick={clickHandler}
        >
          <BsArrowRight size={23} />
        </span>
      );
    },
  };
  return (
    <div className="p-3 bg-white rounded-lg my-4">
      <div className="font-bold flex justify-between items-center mb-2">
        <h2>Connect With Best Sellers</h2>
        <button>View All</button>
      </div>
      <Carousel
        {...options}
        className="  rounded-md relative mr-2 overflow-visible"
      >
        <div className="rounded-md flex items-center justify-center flex-col mr-2">
          <div className="flex items-center justify-center flex-col ">
            <div className="sm:w-[128px] w-[88px] rounded-full border-2 border-blue-600 flex items-center justify-center">
              <img
                className=" rounded-full sm:w-[120px] w-[80px] sm:h-[120px] h-[80px] object-cover overflow-hidden m-[2px]"
                src="/cover.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" font-semibold">
            <p className="text-[10px] leading-3"> 123 people are connected</p>
            <h2 className="font-bold">Atik Traders</h2>
            <p className="w-[70%] leading-3 whitespace-nowrap text-xs mx-auto relative overflow-hidden text-ellipsis">
              Electronics & servicing
            </p>
            <p className="text-xs leading-4">Dhaka</p>
            <button className=" border-blue-400 rounded-full px-2 py-1 border-2">
              Connect
            </button>
          </div>
        </div>
        <div className="rounded-md flex items-center justify-center flex-col mr-2">
          <div className="flex items-center justify-center flex-col ">
            <div className="sm:w-[128px] w-[88px] rounded-full border-2 border-blue-600 flex items-center justify-center">
              <img
                className=" rounded-full sm:w-[120px] w-[80px] sm:h-[120px] h-[80px] object-cover overflow-hidden m-[2px]"
                src="/cover.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" font-semibold">
            <p className="text-[10px] leading-3"> 123 people are connected</p>
            <h2 className="font-bold">Atik Traders</h2>
            <p className="w-[70%] leading-3 whitespace-nowrap text-xs mx-auto relative overflow-hidden text-ellipsis">
              Electronics & servicing
            </p>
            <p className="text-xs leading-4">Dhaka</p>
            <button className=" border-blue-400 rounded-full px-2 py-1 border-2">
              Connect
            </button>
          </div>
        </div>
        <div className="rounded-md flex items-center justify-center flex-col mr-2">
          <div className="flex items-center justify-center flex-col ">
            <div className="sm:w-[128px] w-[88px] rounded-full border-2 border-blue-600 flex items-center justify-center">
              <img
                className=" rounded-full sm:w-[120px] w-[80px] sm:h-[120px] h-[80px] object-cover overflow-hidden m-[2px]"
                src="/cover.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" font-semibold">
            <p className="text-[10px] leading-3"> 123 people are connected</p>
            <h2 className="font-bold">Atik Traders</h2>
            <p className="w-[70%] leading-3 whitespace-nowrap text-xs mx-auto relative overflow-hidden text-ellipsis">
              Electronics & servicing
            </p>
            <p className="text-xs leading-4">Dhaka</p>
            <button className=" border-blue-400 rounded-full px-2 py-1 border-2">
              Connect
            </button>
          </div>
        </div>
        <div className="rounded-md flex items-center justify-center flex-col mr-2">
          <div className="flex items-center justify-center flex-col ">
            <div className="sm:w-[128px] w-[88px] rounded-full border-2 border-blue-600 flex items-center justify-center">
              <img
                className=" rounded-full sm:w-[120px] w-[80px] sm:h-[120px] h-[80px] object-cover overflow-hidden m-[2px]"
                src="/cover.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" font-semibold">
            <p className="text-[10px] leading-3"> 123 people are connected</p>
            <h2 className="font-bold">Atik Traders</h2>
            <p className="w-[70%] leading-3 whitespace-nowrap text-xs mx-auto relative overflow-hidden text-ellipsis">
              Electronics & servicing
            </p>
            <p className="text-xs leading-4">Dhaka</p>
            <button className=" border-blue-400 rounded-full px-2 py-1 border-2">
              Connect
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ConnectSlider;
