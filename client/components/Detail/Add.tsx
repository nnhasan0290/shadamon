import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight, BsExclamation } from "react-icons/bs";
import { useState } from "react";
import { FaFacebook, FaHands } from "react-icons/fa";
import { BiCar, BiCategory, BiHeartCircle, BiShare } from "react-icons/bi";
import { FcElectronics } from "react-icons/fc";
import DownCarousel from "./DownCarousel";

const Add = () => {
  const [selected, setSelected] = useState(0);
  const handleChange = (a: number, b: any) => {
    console.log(b);
    setSelected(a);
  };
  const options = {
    showStatus: false,
    showIndicators: false,
    selectedItem: 0,
    onChange: handleChange,
  };
  return (
    <main className=" bg-white rounded-md sm:w-[500px] w-full overflow-hidden p-2 ">
      <div className="border">
        <div className="relative ">
          <div className="absolute top-2 right-2 p-2 ml-auto text-xl nav__icon z-10">
            <svg
              className="h-[25px] w-[25px] "
              fill="#5a5a5a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
          <div className="absolute top-2 left-2 p-2 ml-auto text-sm bg-white border-x-4 border-x-common-color  z-10">
            <h2 className="text-lg leading-3">URGENT</h2>
            <p className="text-common-gray">Sell Product</p>
          </div>
          <Carousel
            {...options}
            className="  rounded-md relative pb-3  font-bold overflow-visible"
          >
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
            <div className="rounded-md">
              <img src="/cover.jpg" alt="" className="rounded-md" />
            </div>
          </Carousel>
        </div>

        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>

        <div className="p-3">
          <DownCarousel />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <div className="border rounded-full bg-muted-color">
            <BsExclamation size={25} />
          </div>
          <div className="border rounded-full ">
            <FaFacebook size={25} />
          </div>
          <div className="border text-white px-3 py-1 rounded-full bg-black cursor-pointer">
            <span>Close Detail</span>
          </div>
          <div className="border rounded-full bg-muted-color">
            <BiHeartCircle size={25} />
          </div>
          <div className="border rounded-full bg-muted-color">
            <BiShare size={25} />
          </div>
        </div>
        <div className="px-2 my-2">
          <hr className="w-full h-2px bg-common-gray" />
        </div>
      </div>
    </main>
  );
};

export default Add;
