import { BsExclamation } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BiHeartCircle, BiShare } from "react-icons/bi";
import { useScrollDir } from "../../utils/ScrollDir";
import Link from "next/link";

export default function ({ id, setState, state }: any) {
  const isScrollTop = useScrollDir();
  return (
    <>
      <div
        className={`text-center transition-all duration-300 sticky  pb-2 z-10  lg:bottom-3 ${
          isScrollTop ? "bottom-[68px]" : "bottom-3"
        }  `}
        onClick={() => {
          setState(!state);
        }}
      >
        <Link href={`/#${id}`} scroll={false}>
          <div className="border inline-block text-white px-3 py-1 my-[-6px] rounded-full bg-black cursor-pointer">
            <span>Close Detail</span>
          </div>
        </Link>
      </div>
      <div className="flex justify-between translate-y-[-90%] mb-[-30px] bg-white pb-3">
        <div className="w-[50%]  flex items-center justify-end pr-[60px] gap-2  bg-white">
          <div className="inline-block border rounded-full bg-muted-color">
            <BsExclamation size={25} />
          </div>
          <div className="inline-block border rounded-full">
            <FaFacebook size={25} />
          </div>
        </div>

        <div className="w-[50%] bg-white flex items-center pl-[60px] gap-2 relative z-[0] ml-auto">
          <div className="inline-block border rounded-full bg-muted-color">
            <BiHeartCircle size={25} />
          </div>
          <div className="inline-block border rounded-full bg-muted-color">
            <BiShare size={25} />
          </div>
          <div className="px-2 my-2">
            <hr className="w-full h-2px bg-common-gray" />
          </div>
        </div>
      </div>
    </>
  );
}
