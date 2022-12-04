import { MdOutlineSendToMobile } from "react-icons/md";

export default function () {
  return (
    <div className="p-10 w-full">
      <div className=" mx-auto">
        <div className="flex leading-3  justify-between items-center">
          <h2>Lal Payaj(Onion Red)</h2>
          <h2>$49</h2>
        </div>
        <div className="flex justify-between items-center text-smallest-color text-[13.5px]">
          <p>Delivery charge</p>
          <p>$50</p>
        </div>
        <div className="flex border-b justify-between items-center text-smallest-color text-[13.5px]">
          <p>Delivery charge</p>
          <p>$50</p>
        </div>
        <div className="flex leading-3 text-[13.5px] py-1  justify-between items-center">
          <h2>Lal Payaj(Onion Red)</h2>
          <h2>$49</h2>
        </div>
      </div>
      <form>
        <div className="flex flex-wrap items-center my-5">
          <h2 className="font-semibold ">Your shipping address</h2>
          <div className="basis-full">
            <fieldset className="mb-2 mr-3 border rounded-md ">
              <legend className="mx-3 leading-[17px] text-[13.5px] text-blue-500">
                Name
              </legend>
              <input
                className="p-2 px-4 pt-0"
                type="text"
                name=""
                id=""
                placeholder=""
                value="ripon"
              />
            </fieldset>
          </div>
          <div className="basis-full">
            <fieldset className="mb-2 mr-3 border rounded-md ">
              <legend className="mx-3 leading-[17px] text-[13.5px] text-blue-500">
                Phone Number
              </legend>
              <input
                className="p-2 px-4 pt-0"
                type="text"
                name=""
                id=""
                placeholder=""
                value="018383484484"
              />
            </fieldset>
          </div>
          <div className="basis-full">
            <fieldset className="mb-2 mr-3 border rounded-md ">
              <legend className="mx-3 leading-[17px] text-[13.5px] text-common-gray">
                Address for Delivery
              </legend>
              <input
                className="p-2 px-4 pt-0"
                type="text"
                name=""
                id=""
                placeholder=""
                value=""
              />
            </fieldset>
          </div>
          <div className="basis-full">
            <fieldset className="mb-2 mr-3 border rounded-md ">
              <legend className="mx-3  leading-[17px] text-[13.5px] text-common-gray">
                Nearest Area
              </legend>
              <select
                name=""
                id=""
                className="border-0 w-[90%] mx-4 hover:bg-white"
              >
                <option value="">option-one</option>
              </select>
            </fieldset>
          </div>
          <div className="basis-full">
            <h2 className="font-semibold ">Payment Options</h2>
            <div className="flex items-center justify-between">
              <button className="border p-2 px-4 rounded-md">
                Pay Cash Now
              </button>
              <button className="border p-2 px-4 rounded-md">
                {" "}
                Cash On Delivery
              </button>
            </div>
            <div className="flex gap-2 text-[13.5px] py-2 border-b">
              <span>
                <input type="checkbox" name="" id="" />
              </span>
              <p>
                I have react and accept the{" "}
                <span className="cursor-pointer text-blue-500">
                  terms and Conditions
                </span>
              </p>
            </div>
          </div>
          <div className="basis-full flex flex-col items-center justify-center">
            <h2 className="font-semibold ">
              Please verify with your phone number
            </h2>
            <h2 className="font-semibold">
              017383874439{" "}
              <span className="cursor-pointer text-blue-500">Change</span>
            </h2>
            <span>
              <MdOutlineSendToMobile size={45} />
            </span>
            <p className="text-common-gray text-center leading-3 text-sm">
              WebFirst, lorem ipsum works well for staging. It's like the props
              in a furniture store—filler text makes it look like
            </p>
            <div className="w-full py-2 flex  justify-between items-center gap-5">
              <input className="basis-1/2 py-1 border rounded-md" type="text" />
              <button className="bg-common-color rounded-md basis-1/2 py-1 text-white">
                Verify
              </button>
            </div>
            <div className="leading-4 text-center text-common-gray text-sm">
              <p className="basis-full">Don't receive the Pin code?</p>
                <span className="text-blue-500 cursor-pointer">Get New Pincode</span>
            </div>
            <hr className="w-full h-[1px] border my-2"/>
            <span className="text-blue-500 text-sm cursor-pointer">Get Back to the Delivery Order form</span>
          </div>
        </div>
      </form>
    </div>
  );
}
