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
        <div className="rounded-md border flex items-center justify-center flex-col mr-2">
          <div className="flex items-center justify-center flex-col relative">
            <div className="w-[128px] rounded-full border-2 border-blue-600 flex items-center justify-center">
              <img
                className=" rounded-full w-[120px] h-[120px] object-cover overflow-hidden m-[2px]"
                src="/cover.jpg"
                alt=""
              />
            </div>
            <div className="leading-4 bg-blue-500 text-white p-1 rounded-md absolute bottom-0 translate-y-[50%]">
              <h2 className="font-bold">12998</h2>
              <p className="font-semibold whitespace-nowrap">
                People Connected
              </p>
            </div>
          </div>
          <div className=" my-5 font-semibold">
            <h2 className="font-bold text-lg">Atik Traders</h2>
            <p className="w-[70%] leading-3 whitespace-nowrap text-sm mx-auto relative overflow-hidden text-ellipsis">
              Electronics & servicing
            </p>
            <p className="text-sm leading-4">Dhaka</p>
            <button className=" border-blue-400 rounded-full px-2 py-1 border-2">
              Connect & See
            </button>
          </div>
        </div>
        <div className="rounded-md border mr-2 flex items-center justify-center flex-col">
          <div className="flex items-center justify-center flex-col relative">
            <div className="w-[128px] rounded-full border-2 border-blue-600 flex items-center justify-center">
              <img
                className=" rounded-full w-[120px] h-[120px] object-cover overflow-hidden m-[2px]"
                src="/cover.jpg"
                alt=""
              />
            </div>
            <div className="leading-4 bg-blue-500 text-white p-1 rounded-md absolute bottom-0 translate-y-[50%]">
              <h2 className="font-bold">12998</h2>
              <p className="font-semibold whitespace-nowrap">
                People Connected
              </p>
            </div>
          </div>
          <div className=" my-5 font-semibold">
            <h2 className="font-bold text-lg">Atik Traders</h2>
            <p className="w-[70%] leading-3 whitespace-nowrap text-sm mx-auto relative overflow-hidden text-ellipsis">
              Electronics & servicing
            </p>
            <p className="text-sm leading-4">Dhaka</p>
            <button className="border border-blue-400 rounded-full px-2 py-1">
              Connect & See
            </button>
          </div>
        </div>
        <div className="rounded-md border flex items-center justify-center flex-col mr-2">
          <div className="flex items-center justify-center flex-col relative">
            <div className="w-[128px] rounded-full border-2 border-blue-600 flex items-center justify-center">
              <img
                className=" rounded-full w-[120px] h-[120px] object-cover overflow-hidden m-[2px]"
                src="/cover.jpg"
                alt=""
              />
            </div>
            <div className="leading-4 bg-blue-500 text-white p-1 rounded-md absolute bottom-0 translate-y-[50%]">
              <h2 className="font-bold">12998</h2>
              <p className="font-semibold whitespace-nowrap">
                People Connected
              </p>
            </div>
          </div>
          <div className=" my-5 font-semibold">
            <h2 className="font-bold text-lg">Atik Traders</h2>
            <p className="w-[70%] leading-3 whitespace-nowrap text-sm mx-auto relative overflow-hidden text-ellipsis">
              Electronics & servicing
            </p>
            <p className="text-sm leading-4">Dhaka</p>
            <button className="border border-blue-400 rounded-full px-2 py-1">
              Connect & See
            </button>
          </div>
        </div>
        <div className="rounded-md border flex items-center justify-center flex-col mr-2">
          <div className="flex items-center justify-center flex-col relative">
            <div className="w-[128px] rounded-full border-2 border-blue-600 flex items-center justify-center">
              <img
                className=" rounded-full w-[120px] h-[120px] object-cover overflow-hidden m-[2px]"
                src="/cover.jpg"
                alt=""
              />
            </div>
            <div className="leading-4 bg-blue-500 text-white p-1 rounded-md absolute bottom-0 translate-y-[50%]">
              <h2 className="font-bold">12998</h2>
              <p className="font-semibold whitespace-nowrap">
                People Connected
              </p>
            </div>
          </div>
          <div className=" my-5 font-semibold">
            <h2 className="font-bold text-lg">Atik Traders</h2>
            <p className="w-[70%] leading-3 whitespace-nowrap text-sm mx-auto relative overflow-hidden text-ellipsis">
              Electronics & servicing
            </p>
            <p className="text-sm leading-4">Dhaka</p>
            <button className="border border-blue-400 rounded-full px-2 py-1">
              Connect & See
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ConnectSlider;
