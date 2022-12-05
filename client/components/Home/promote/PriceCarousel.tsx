import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoLogoWordpress } from "react-icons/io";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Close } from "@mui/icons-material";

const PriceCarousel = () => {
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
    centerSlidePercentage: 65,
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
    <div className="my-5 w-full">
      <Carousel
        {...options}
        className="text-xs font-semibold leading-4 rounded-md"
      >
        <div className="flex flex-col bg-body-bg items-center mr-5 border cursor-pointer rounded-xl py-[20px]">
          <p className="text-common-gray">PER CONNECT $40</p>
          <h2 className="text-xl">Gold</h2>
          <p>90 Days</p>
          <p className="mt-3 text-green-700">
            56% off <span className="line-through text-common-gray">$4500</span>
          </p>
          <h2 className="text-xl">$1999</h2>
          <div className="flex flex-col gap-2 items-start my-5 leading-3 text-start">
            <div className="flex gap-1 justify-center items-center text-sm text-common-gray">
              <span className="cursor-pointer text-common-color">
                <AiFillCheckCircle size={15}/>
              </span>
              <span> 100 Product Upload</span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span className="cursor-pointer text-common-color">
                <AiFillCheckCircle size={15} />
              </span>
              <span>
                {" "}
                Per post view 1000 time [2 month] <br /> Everyday product
                promote
              </span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span className="cursor-pointer text-common-color">
                <AiFillCheckCircle size={15} />
              </span>
              <span>
                {" "}
                Per post view 1000 time [2 month] <br /> Everyday product
                promote
              </span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span className="text-white rounded-full h-[14px] w-[15px] cursor-pointer bg-common-gray">
                <Close sx={{fontSize: 15}}/>
              </span>
              <span>
                Per post view 1000 time [2 month] 
              </span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span className="text-white rounded-full h-[14px] w-[15px] cursor-pointer bg-common-gray">
                <Close sx={{fontSize: 15}}/>
              </span>
              <span>
                Per post view 1000 time [2 month] 
              </span>
            </div>
            
          </div>
          <button className="px-3 py-2 text-white rounded-full bg-common-color">Continue</button>
        </div>
        <div className="flex flex-col items-center border cursor-pointer rounded-xl py-[20px]">
          <p className="text-common-gray">PER CONNECT $40</p>
          <h2 className="text-xl">Gold</h2>
          <p>90 Days</p>
          <p className="mt-3 text-green-700">
            56% off <span className="line-through text-common-gray">$4500</span>
          </p>
          <h2 className="text-xl">$1999</h2>
          <div className="flex flex-col gap-2 items-start my-5 leading-3 text-start">
            <div className="flex gap-1 justify-center items-center text-sm text-common-gray">
              <span className="cursor-pointer text-common-color">
                <AiFillCheckCircle size={15}/>
              </span>
              <span> 100 Product Upload</span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span className="cursor-pointer text-common-color">
                <AiFillCheckCircle size={15} />
              </span>
              <span>
                {" "}
                Per post view 1000 time [2 month] <br /> Everyday product
                promote
              </span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span className="cursor-pointer text-common-color">
                <AiFillCheckCircle size={15} />
              </span>
              <span>
                {" "}
                Per post view 1000 time [2 month] <br /> Everyday product
                promote
              </span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span className="text-white rounded-full h-[14px] w-[15px] cursor-pointer bg-common-gray">
                <Close sx={{fontSize: 15}}/>
              </span>
              <span>
                Per post view 1000 time [2 month] 
              </span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span className="text-white rounded-full h-[14px] w-[15px] cursor-pointer bg-common-gray">
                <Close sx={{fontSize: 15}}/>
              </span>
              <span>
                Per post view 1000 time [2 month] 
              </span>
            </div>
            
          </div>
          <button className="px-3 py-2 text-white rounded-full bg-common-color">Continue</button>
        </div>
      </Carousel>
    </div>
  );
};

export default PriceCarousel;
