import Link from "next/link";
import { GoLocation } from "react-icons/go";

const SmallestAd = () => {
  return (
    <Link href="#">
      <div className="flex items-center gap-2 my-2 bg-white rounded-md h-[100px] overflow-hidden">
        <img
          src="/cover.jpg"
          alt=""
          className="rounded-md w-[140px] h-[100px] object-cover"
        />
        <div className="flex flex-col justify-center p-1">
          <div className="flex gap-2 text-sm capitalize">
            <h5 className="font-semibold ">user name</h5>
            <span className="text-common-gray">seller</span>
          </div>
          <h2 className="capitalize font-semibold w-[85%] leading-4">
            oxygen taipai NTU Oxygen Goggoon Taipei NTU Oxygen
          </h2>
          <div className="flex gap-3 text-xs font-semibold text-common-gray">
            <div className="flex items-center gap-1 ">
              <GoLocation />
              <span>Chittagong</span>
            </div>
            <div className="flex items-center gap-1 ">
              <GoLocation />
              <span>Chittagong</span>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold ">$5353</h2>
            <span className="pr-5 font-semibold capitalize text-common-gray">
              just now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SmallestAd;
