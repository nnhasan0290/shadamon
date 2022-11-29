import { url } from "inspector";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";

export default function ({ children }: any) {
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState(0);
  console.log(children[1].props.children.props.src);

  const option = {
    showThumbs: false,
    showIndicators: false,
    swipeable: true,
    emulateTouch: true,
    renderArrowPrev: (clickHandler: any, hasPrev: any, label: any) => {
      return (
        <span
          className={`arrow-left absolute top-[50%]  rounded-full left-0  z-10 translate-y-[-50%] cursor-pointer text-common-gray bg-body-bg`}
          onClick={clickHandler}
        >
          <BiChevronLeft size={30} />
        </span>
      );
    },
    renderArrowNext: (clickHandler: any, hasNext: any, label: any) => {
      return (
        <span
          className={`arrow-right absolute top-[50%] text-common-gray  rounded-full right-0 translate-y-[-50%] cursor-pointer bg-body-bg `}
          onClick={clickHandler}
        >
          <BiChevronRight size={30} />
        </span>
      );
    },
  };
  return (
    <div className="">
      {showPopup && (
        <div className="fixed top-0 left-0 z-[200] w-full h-screen bg-black/90 flex items-center justify-center">
          <div
            className="absolute p-2 ml-auto text-xl top-5 right-2 nav__icon z-[201]"
            onClick={() => setShowPopup(!showPopup)}
          >
            <svg
              className="h-[25px] w-[25px] "
              fill="#5a5a5a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
          <Carousel {...option} className="w-full">
            {children.map((e: any, i: number) => {
              return (
                <div className="relative max-w-[500px] overflow-hidden mx-auto">
                  <div
                    style={{
                      backgroundImage: `url(${e.props.children.props.src})`,
                    }}
                    className={`absolute top-0 left-0 bg-no-repeat bg-cover bg-center rounded-md  w-full h-[100%] blur-[4px] `}
                  ></div>
                  <div className="relative z-10 ]">
                    <img
                      className=" mx-auto rounded-md h-[263px] object-cover sm:object-contain max-w-[100%]"
                      src={e.props.children.props.src}
                      alt="post img"
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
      <div className="relative overflow-hidden rounded-lg">
        <div
          style={{
            backgroundImage: `url(${children[selected].props.children.props.src})`,
          }}
          className="bg-no-repeat bg-cover bg-center absolute top-0 left-0 rounded-md  w-full h-[100%] blur-[4px]"
        ></div>
        <div className="relative z-10">
          <img
            className=" mx-auto rounded-md h-[263px] max-w-[100%] object-cover sm:object-contain"
            src={children[selected].props.children.props.src}
            alt="post img"
          />
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute cursor-pointer top-0 right-0 w-[25%] bg-white/40 text-white font-bold text-lg h-full flex items-center justify-center"
          onClick={() => setShowPopup(!showPopup)}
        >
          See all
        </div>
        <div className="flex overflow-hidden  flex-nowrap rounded-b-[25px] w-full m-0">
          {children.map((e: any, i: number) => {
            return (
              <>
                {i <= 3 && (
                  <div className="w-[25%]">
                    <img
                      src={e.props.children.props.src}
                      className="w-full h-[70px] object-cover p-[2px] cursor-pointer"
                      onClick={() => setSelected(i)}
                      alt="alt"
                    />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
