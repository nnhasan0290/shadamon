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
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[50%] bg-common-color p-2 rounded-full left-0  translate-x-[-50%] z-10 translate-y-[-50%] cursor-pointer text-white ${
            selected === 1 && "hidden"
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
    <div className=" bg-white rounded-md">
      <div className="flex items-center gap-2 text-common-gray font-semibold p-2 px-5">
        <FaHands />
        <span>See Product from your suitable category</span>
      </div>
      <Carousel
        {...options}
        className="  rounded-md relative mr-2 pb-3  font-bold overflow-visible"
      >
        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-md mr-2  gap-3 shadow-lg">
          <BiCategory />
          <h2>All</h2>
        </div>
        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-md mx-2 gap-3 shadow-lg">
          <BiCar />
          <h2>Motors</h2>
        </div>
        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-md mx-2 gap-3 shadow-lg">
          <FcElectronics />
          <h2>Electronics</h2>
        </div>
        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-md mx-2 gap-3 shadow-lg">
          <FcElectronics />
          <h2>Electronics</h2>
        </div>
      </Carousel>
    </div>
  );
};

export default CatButton;
