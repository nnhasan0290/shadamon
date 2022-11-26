import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";

const Advertisement = () => {
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
    centerSlidePercentage: 30,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[50%] bg-common-color p-1 rounded-full left-0  translate-x-[-50%] z-10 translate-y-[-50%] cursor-pointer text-white ${
            selected === 1 && "hidden"
          }`}
          onClick={clickHandler}
        >
          <BsArrowLeft size={15} />
        </span>
      );
    },
    renderArrowNext: (clickHandler: any, hasNext: any, label: any) => {
      return (
        <span
          className={`arrow-right absolute top-[50%] bg-common-color p-1 rounded-full right-0 translate-y-[-50%] cursor-pointer text-white translate-x-[50%] ${
            selected === 2 && "hidden"
          }`}
          onClick={clickHandler}
        >
          <BsArrowRight size={15} />
        </span>
      );
    },
  };
  return (
    <div>
      <img src="/ad.jpg" alt="" />
      <div>
        <h2>Chat or Send message</h2>
        <div>
          <BiSearch />
          <input type="search" />
        </div>
        <div>
          <Carousel
            {...options}
            className="   relative mr-2  text-xs overflow-visible border-b border-b-common-gray"
          >
            <div className="flex items-center cursor-pointer justify-center flex-col border-gray-300  rounded-md   gap-1 mr-1 my-2   w-[50px]">
              <div className="relative w-[40px]">
                <img
                  className="object-cover  rounded-full  h-[40px]"
                  src="/cover.jpg"
                  alt=""
                />
                <div className="absolute rounded-full bottom-0 left-[70%] bg-white w-[12px] h-[12px] flex items-center justify-center">
                  <span className="bg-green-700 w-[10px] h-[10px] rounded-full "></span>
                </div>
              </div>
              <span className="overflow-hidden text-ellipsis relative whitespace-nowrap w-[40px] leading-3 text-[10px]">
                Moumi Tabassum
              </span>
            </div>
            <div className="flex items-center cursor-pointer justify-center flex-col border-gray-300  rounded-md   gap-1 mr-1 my-2   w-[50px]">
              <div className="relative w-[40px]">
                <img
                  className="object-cover  rounded-full  h-[40px]"
                  src="/cover.jpg"
                  alt=""
                />
                <div className="absolute rounded-full bottom-0 left-[70%] bg-white w-[12px] h-[12px] flex items-center justify-center">
                  <span className="bg-green-700 w-[10px] h-[10px] rounded-full "></span>
                </div>
              </div>
              <span className="overflow-hidden text-ellipsis relative whitespace-nowrap w-[40px] leading-3 text-[10px]">
                Moumi Tabassum
              </span>
            </div>
            <div className="flex items-center cursor-pointer justify-center flex-col border-gray-300  rounded-md   gap-1 mr-1 my-2  w-[50px]">
              <div className="relative w-[40px]">
                <img
                  className="object-cover  rounded-full  h-[40px]"
                  src="/cover.jpg"
                  alt=""
                />
                <div className="absolute rounded-full bottom-0 left-[70%] bg-white w-[12px] h-[12px] flex items-center justify-center">
                  <span className="bg-green-700 w-[10px] h-[10px] rounded-full "></span>
                </div>
              </div>
              <span className="overflow-hidden text-ellipsis relative whitespace-nowrap w-[40px] leading-3 text-[10px]">
                Moumi Tabassum
              </span>
            </div>
            <div className="flex items-center cursor-pointer justify-center flex-col border-gray-300  rounded-md   gap-1 mr-1 my-2   w-[50px]">
              <div className="relative w-[40px]">
                <img
                  className="object-cover  rounded-full  h-[40px]"
                  src="/cover.jpg"
                  alt=""
                />
                <div className="absolute rounded-full bottom-0 left-[70%] bg-white w-[12px] h-[12px] flex items-center justify-center">
                  <span className="bg-green-700 w-[10px] h-[10px] rounded-full "></span>
                </div>
              </div>
              <span className="overflow-hidden text-ellipsis relative whitespace-nowrap w-[40px] leading-3 text-[10px]">
                Moumi Tabassum
              </span>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
