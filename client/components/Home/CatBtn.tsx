import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { FaHands } from "react-icons/fa";
import { BiCar, BiCategory } from "react-icons/bi";
import { FcElectronics } from "react-icons/fc";

const CatButton = () => {
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
    swipeScrollTolerance: 50,
    preventMovementUntilSwipeScrollTolerance: true,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[50%] bg-common-color p-2 rounded-full left-0  translate-x-[-50%] z-10 translate-y-[-50%] cursor-pointer text-white ${
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
    <div className=" bg-white rounded-md p-3">
      <div className="flex items-center gap-2 text-common-gray  p-2 px-5">
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
          See Product from your suitable category
        </span>
      </div>
      <Carousel
        {...options}
        className="  rounded-md relative mr-2 pb-3  font-bold overflow-visible"
      >
        <div className="flex items-center flex-col justify-center border border-gray-300 p-1 rounded-md mr-1  gap-1 shadow-lg">
          <BiCategory size={32} />
          <h2>All</h2>
        </div>
        <div className="flex items-center flex-col justify-center border border-gray-300 p-1 rounded-md mr-1 gap-1 shadow-lg">
          <BiCar size={32} />
          <h2>Motors</h2>
        </div>
        <div className="flex items-center flex-col justify-center border border-gray-300 p-1 rounded-md mr-1 gap-1 shadow-lg">
          <FcElectronics size={32} />
          <h2>Electronics</h2>
        </div>
        <div className="flex items-center flex-col justify-center border border-gray-300 p-1 rounded-md mr-1 gap-1 shadow-lg">
          <FcElectronics size={32} />
          <h2>Electronics</h2>
        </div>
      </Carousel>
    </div>
  );
};

export default CatButton;
