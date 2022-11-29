import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

export default function ({ children }: any) {
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState(0);
  console.log(children);
  return (
    <div className="">
      {showPopup && (
        <div className="fixed top-0 left-0 z-[200] w-full h-screen bg-black/90 flex items-center justify-center">
          <div
            className="absolute p-2 ml-auto text-xl top-5 right-5 nav__icon"
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
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            swipeable={true}
            emulateTouch={true}
            className="w-[90%]"
          >
            {children.map((e: any, i: number) => {
              return (
                <div className="relative ">
                  <div className="bg-[url('/cover.jpg')] absolute top-0 left-0 rounded-md  w-full h-[100%] blur-[4px]"></div>
                  <div className="relative z-10">
                    <img
                      className=" mx-auto rounded-md h-[75vh] max-w-[100%]"
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
      <div className="relative">
        <div className="bg-[url('/cover.jpg')] absolute top-0 left-0 rounded-md  w-full h-[100%] blur-[4px]"></div>
        <div className="relative z-10">
          <img
            className=" mx-auto rounded-md sm:h-[253px] max-w-[100%]"
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
                      className="w-full h-[100px] object-cover p-[2px] cursor-pointer"
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
