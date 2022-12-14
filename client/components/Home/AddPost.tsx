import { BiPlus } from "react-icons/bi";

const AddPost = () => {
  return (
    <div className="flex my-4 gap-2 ">
      <div className="basis-1/3 shadow-xl  relative">
        <img
          className="sm:h-[250px] h-[190px] object-cover rounded-lg"
          src="/cover.jpg"
          alt=""
        />
        <div className="absolute bottom-0 text-white p-2 py-6">
          <h2 className="leading-5 text-gray-300 font-semibold text-xs">
            Ahmed Rubel
          </h2>
          <h2 className="leading-3 font-bold text-[11px] tracking-tighter">
            Want To sell Samsung Mobile from Dhaka
          </h2>
        </div>
      </div>
      <div className="basis-1/3 shadow-xl relative">
        <img
          className="sm:h-[250px] h-[190px] object-cover rounded-lg"
          src="/cover.jpg"
          alt=""
        />
        <div className="absolute bottom-0 text-white p-2 py-6">
          <h2 className="leading-5 text-gray-300 font-semibold text-xs">
            Ahmed Rubel
          </h2>
          <h2 className="leading-3 font-bold text-[11px] tracking-tighter">
            Want To sell Samsung Mobile from Dhaka
          </h2>
        </div>
      </div>
      <div className="basis-1/3 shadow-xl relative">
        <img
          className="sm:h-[250px] h-[190px] object-cover rounded-lg"
          src="/cover.jpg"
          alt=""
        />
        <div className="absolute bottom-0 flex items-center justify-center flex-col bg-white w-full rounded-b-lg h-[60px]">
          <div className="p-1 bg-white translate-y-[-50%] rounded-full ">
            <div className="border text-white bg-blue-700 rounded-full">
              <BiPlus size={30} />
            </div>
          </div>
          <p className="font-semibold text-xs translate-y-[-100%]">
            Post Your Product
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
