import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";
import { GlobalStates } from "../../context/ContextProvider";

const NvtStop = () => {
  const { dispatch } = GlobalStates();
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
    centerSlidePercentage: 70,
    swipeScrollTolerance: 50,
    preventMovementUntilSwipeScrollTolerance: true,
    onChange: handleChange,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[50%] bg-common-color p-2 rounded-full left-0  z-10 translate-y-[-50%] cursor-pointer text-white ${
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
          className={`arrow-right absolute top-[50%] bg-common-color p-2 rounded-full right-0 translate-y-[-50%] cursor-pointer text-white  ${
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
    <Carousel {...options} className="  rounded-md  mr-2  sm:mx-0 mx-5">
      <div
        className="relative mr-2 cursor-pointer mb-[50px]"
        onClick={() => dispatch({ type: "BIG POST DETAIL" })}
      >
        <img src="/cover.jpg" className="rounded-md  object-cover" />
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[85%] nvt__carousel rounded-md  ">
          <img
            src="/cover.jpg"
            className="rounded-full absolute h-[65px] bg-white translate-y-[-50%] left-[39px]  top-0 border border-white"
          />
          <div className="absolute top-0 left-0 w-full overflow-hidden rounded-md">
            <svg
              width="309"
              height="102"
              viewBox="0 0 309 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" rounded-md "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.5 38C92.2107 38 109 21.2107 109 0.5C109 0.333076 108.999 0.166409 108.997 0H309V102H0V0H34.0033C34.0011 0.166409 34 0.333076 34 0.5C34 21.2107 50.7893 38 71.5 38Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="relative w-full text-start translate-y-[70%] px-2 font-semibold">
            <h2 className="whitespace-nowrap relative overflow-hidden text-ellipsis">
              2 RHK Resident Apartment in Chandivali
            </h2>
            <h2>$2.85</h2>
          </div>
        </div>
      </div>
      <div
        className="relative mr-2 cursor-pointer mb-[50px]"
        onClick={() => dispatch({ type: "BIG POST DETAIL" })}
      >
        <img src="/cover.jpg" className="rounded-md  object-cover" />
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[85%] nvt__carousel rounded-md  ">
          <img
            src="/cover.jpg"
            className="rounded-full absolute h-[65px] bg-white translate-y-[-50%] left-[39px]  top-0 border border-white"
          />
          <div className="absolute top-0 left-0 w-full overflow-hidden rounded-md">
            <svg
              width="309"
              height="102"
              viewBox="0 0 309 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" rounded-md "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.5 38C92.2107 38 109 21.2107 109 0.5C109 0.333076 108.999 0.166409 108.997 0H309V102H0V0H34.0033C34.0011 0.166409 34 0.333076 34 0.5C34 21.2107 50.7893 38 71.5 38Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="relative w-full text-start translate-y-[70%] px-2 font-semibold">
            <h2 className="whitespace-nowrap relative overflow-hidden text-ellipsis">
              2 RHK Resident Apartment in Chandivali
            </h2>
            <h2>$2.85</h2>
          </div>
        </div>
      </div>
      <div
        className="relative mr-2 cursor-pointer mb-[50px]"
        onClick={() => dispatch({ type: "BIG POST DETAIL" })}
      >
        <img src="/cover.jpg" className="rounded-md  object-cover" />
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[85%] nvt__carousel rounded-md  ">
          <img
            src="/cover.jpg"
            className="rounded-full absolute h-[65px] bg-white translate-y-[-50%] left-[39px]  top-0 border border-white"
          />
          <div className="absolute top-0 left-0 w-full overflow-hidden rounded-md">
            <svg
              width="309"
              height="102"
              viewBox="0 0 309 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" rounded-md "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.5 38C92.2107 38 109 21.2107 109 0.5C109 0.333076 108.999 0.166409 108.997 0H309V102H0V0H34.0033C34.0011 0.166409 34 0.333076 34 0.5C34 21.2107 50.7893 38 71.5 38Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="relative w-full text-start translate-y-[70%] px-2 font-semibold">
            <h2 className="whitespace-nowrap relative overflow-hidden text-ellipsis">
              2 RHK Resident Apartment in Chandivali
            </h2>
            <h2>$2.85</h2>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default NvtStop;
