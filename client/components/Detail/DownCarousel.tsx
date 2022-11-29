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
    centerSlidePercentage: 85,
    swipeScrollTolerance: 50,
    preventMovementUntilSwipeScrollTolerance: true,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[40%] bg-common-color p-2 rounded-full left-0   z-10 translate-y-[-50%] cursor-pointer text-white ${
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
          className={`arrow-right absolute top-[40%] bg-common-color p-2 rounded-full right-0 translate-y-[-50%] cursor-pointer text-white ${
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
      <div className="flex items-center gap-2 pb-1">
        <div>
          <IoLogoWordpress size={25} />
        </div>
        <div>
          <span className=" rounded-md text-heading-color font-[500]">
            Web coder Institute
          </span>
        </div>
      </div>
      <Carousel {...options} className="rounded-md ">
        <div className="relative mr-2 mb-[80px] cursor-pointer">
          <div
            style={{
              backgroundImage: `url(/cover.jpg)`,
            }}
            className={`absolute top-0 left-0 bg-no-repeat bg-cover bg-center rounded-md  w-full h-[100%] blur-[4px] `}
          ></div>
          <div className="relative z-10 ">
            <img
              className=" mx-auto rounded-md h-[200px] object-cover max-w-[100%]"
              src="/cover.jpg"
              alt="post img"
            />
            <div className="absolute top-[100%] border w-full p-3 bg-white rounded-b-md text-start">
              <h2 className="overflow-hidden font-semibold leading-4 text-heading-color whitespace-nowrap text-ellipsis">
                NVT Stopping by The Woods written something
              </h2>
              <span className="font-semibold text-heading-color">$837</span>
            </div>
          </div>
        </div>
        <div className="relative mr-2 mb-[80px] cursor-pointer">
          <div
            style={{
              backgroundImage: `url(/cover.jpg)`,
            }}
            className={`absolute top-0 left-0 bg-no-repeat bg-cover bg-center rounded-md  w-full h-[100%] blur-[4px] `}
          ></div>
          <div className="relative z-10 ">
            <img
              className=" mx-auto rounded-md h-[200px] object-cover max-w-[100%]"
              src="/cover.jpg"
              alt="post img"
            />
            <div className="absolute top-[100%] border w-full p-3 bg-white rounded-b-md text-start">
              <h2 className="overflow-hidden font-semibold leading-4 text-heading-color whitespace-nowrap text-ellipsis">
                NVT Stopping by The Woods written something
              </h2>
              <span className="font-semibold text-heading-color">$837</span>
            </div>
          </div>
        </div>
        <div className="relative mr-2 mb-[80px] cursor-pointer">
          <div
            style={{
              backgroundImage: `url(/cover.jpg)`,
            }}
            className={`absolute top-0 left-0 bg-no-repeat bg-cover bg-center rounded-md  w-full h-[100%] blur-[4px] `}
          ></div>
          <div className="relative z-10 ">
            <img
              className=" mx-auto rounded-md h-[200px] object-cover max-w-[100%]"
              src="/cover.jpg"
              alt="post img"
            />
            <div className="absolute top-[100%] border w-full p-3 bg-white rounded-b-md text-start">
              <h2 className="overflow-hidden font-semibold leading-4 text-heading-color whitespace-nowrap text-ellipsis">
                NVT Stopping by The Woods written something
              </h2>
              <span className="font-semibold text-heading-color">$837</span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DownCarousel;
