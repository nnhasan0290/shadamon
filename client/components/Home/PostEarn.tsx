import Link from "next/link";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaHands } from "react-icons/fa";

const PostEarn = () => {
  return (
    <div className="my-4 bg-gray-300 rounded-lg border">
      <div className="flex items-center gap-2 text-common-gray p-2 px-5 bg-white rounded-t-lg">
        <FaHands />
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">This place is for you . Start selling & Get Bonus!</span>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full rounded-lg"
          src="/cover.jpg"
          alt=""
        />
      </div>
      <div className="px-5 py-3  rounded-b-md  flex items-center ">
        <div className="flex items-center justify-between w-[65%] mb-2">
          <div className="">
            <h2 className="font-semibold leading-5 text-lg text-heading-color">Post & Earn</h2>
            <p className=" text-sm text-common-gray capitalize leading-4 tracking-tight">
              Sell Your used or new Product Easily. Beside{" "}
              <span className="font-bold">
                <Link href="#">See more</Link>
              </span>
            </p>
            <p className="leading-4 text-common-gray">You can get Taka 5000</p>
          </div>
        </div>
        <div className="w-[30%]">
          <button className=" whitespace-nowrap border border-common-gray p-1 px-3 font-semibold shadow-lg rounded-md ">
            Start Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostEarn;
