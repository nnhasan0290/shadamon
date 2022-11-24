import { BiLocationPlus } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const SmallestAd = () => {
  return (
    <div className="flex items-center bg-white my-2 gap-2 rounded-md">
      <img src="/cover.jpg" alt="" width={120} className="rounded-md h-full" />
      <div className="p-3 flex flex-col gap-1">
        <h2 className="capitalize font-semibold w-[85%] leading-4">
          oxygen taipai NTU Oxygen Goggoon Taipei NTU Oxygen
        </h2>
        <div className="flex gap-3 text-common-gray font-semibold text-sm">
          <div className="flex items-center gap-1 ">
            <GoLocation />
            <span>Chittagong</span>
          </div>
          <div className="flex items-center gap-1 ">
            <GoLocation />
            <span>Chittagong</span>
          </div>
        </div>
        <h2 className="font-bold text-xl">$5353</h2>
      </div>
    </div>
  );
};

export default SmallestAd;
