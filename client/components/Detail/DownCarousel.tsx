import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoLogoWordpress } from "react-icons/io";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const DownCarousel = () => {
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
    centerSlidePercentage: 80,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[30%] bg-common-color p-2 rounded-full left-0   z-10 translate-y-[-50%] cursor-pointer text-white ${
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
          className={`arrow-right absolute top-[30%] bg-common-color p-2 rounded-full right-0 translate-y-[-50%] cursor-pointer text-white ${
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
    <div className="">
      <div className="flex items-center gap-2">
        <div>
          <IoLogoWordpress size={30} />
        </div>
        <div>
          <h2 className="font-bold leading-3 text-sm">WebCoder Institution</h2>
          <span className="leading-3 text-xs bg-yellow-300 text-white px-1 rounded-md">
            Ad
          </span>
        </div>
      </div>
      <Carousel {...options} className="  rounded-md  ">
        <div className="relative mr-2 cursor-pointer mb-[50px]">
          <img src="/cover.jpg" className="rounded-md  object-cover" />
          <div className="  z-10 p-3 text-start bg-white">
            <h2 className="font-bold sm:text-lg  leading-4">
              NVT Stopping by The Woods written something
            </h2>
          </div>
        </div>
        <div className="relative mr-2 cursor-pointer mb-[50px]">
          <img src="/cover.jpg" className="rounded-md  object-cover" />
          <div className="  z-10 p-3 text-start bg-white">
            <h2 className="font-bold sm:text-lg  leading-4">
              NVT Stopping by The Woods written something
            </h2>
          </div>
        </div>
        <div className="relative mr-2 cursor-pointer mb-[50px]">
          <img src="/cover.jpg" className="rounded-md  object-cover" />
          <div className="  z-10 p-3 text-start bg-white">
            <h2 className="font-bold sm:text-lg  leading-4">
              NVT Stopping by The Woods written something
            </h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DownCarousel;
