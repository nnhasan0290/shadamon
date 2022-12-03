import { BiMinus, BiSave } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { useRef } from "react";
import SellerInfo from "./SellerInfo";

export default function () {
  const cvRef = useRef<HTMLInputElement>(null);
  return (
    <div className="px-3">
      <div className="mt-2">
        <h2 className="mx-3 text-[13.5px] text-common-gray ">Profile</h2>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <h2 className="text-sm text-smallest-color">BASIC INFORMATION</h2>
          <form action="" className="">
            <div className="flex flex-wrap items-center ">
              <div className="basis-1/2">
                <fieldset className="mb-2 mr-3 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Name
                  </legend>
                  <input
                    className="p-2 pt-0"
                    type="number"
                    name=""
                    id=""
                    placeholder="Bebaha Support"
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Email
                  </legend>
                  <input
                    className="p-2 pt-0"
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 mr-3 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Location
                  </legend>
                  <input
                    className="p-2 pt-0"
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Sub Location
                  </legend>
                  <input
                    className="p-2 pt-0"
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 mr-3 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Mobile Verified
                  </legend>
                  <div className="flex items-center px-2">
                    <input
                      className="w-full p-2 pt-0 text-sm text-common-gray"
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      value={"0183838948484"}
                    />
                    <span className="text-white bg-red-700 rounded-full">
                      <BiMinus />
                    </span>
                  </div>
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Add mobile number
                  </legend>
                  <div className="flex items-center px-2">
                    <input
                      className="w-full p-2 pt-0"
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                    />
                    <span className="text-white bg-green-700 rounded-full">
                      <BsPlus />
                    </span>
                  </div>
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 mr-3 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Date Of Birth
                  </legend>
                  <input
                    className="p-2 pt-0 text-common-gray"
                    type="date"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Education
                  </legend>
                  <input
                    className="p-2 pt-0 "
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 mr-3 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Current Job
                  </legend>
                  <input
                    className="p-2 pt-0 "
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Job Experience
                  </legend>
                  <input
                    className="p-2 pt-0 "
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 mr-3 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Full Address
                  </legend>
                  <input
                    className="p-2 pt-0 "
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 border rounded-md ">
                  <legend className="mx-3 text-[12px] leading-[15px]">
                    Upload Cv(optional)
                  </legend>

                  <div
                    className="flex items-center gap-2 p-1 text-common-gray"
                    onClick={() => {
                      cvRef.current?.click();
                    }}
                  >
                    <span className="text-white rounded-full bg-common-gray">
                      <BsPlus size={21} />
                    </span>
                    <span>cv pic max 30kb</span>
                  </div>
                  <input
                    className="p-2 pt-0 "
                    ref={cvRef}
                    type="file"
                    name=""
                    id=""
                    placeholder=""
                    hidden
                  />
                </fieldset>
              </div>
            </div>
            <div className="flex gap-1 my-2">
              <button className="flex items-center w-full px-2 py-1 text-white rounded-sm bg-common-gray pl-[30%] cursor-pointer gap-1">
                <span>
                  <BiSave />
                </span>
                Save
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-white bg-red-700 rounded-sm">
                <span>
                  <svg
                    className="h-[20px] w-[20px] "
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                  </svg>
                </span>
                Cancel
              </button>
            </div>
          </form>
          <h2 className="mt-5 text-sm text-smallest-color">
            BASIC INFORMATION
          </h2>
          <form action="" className="">
            <div className="flex flex-wrap">
              <div className="basis-1/2">
                <fieldset className="mb-2 mr-3 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Shop Name
                  </legend>
                  <input
                    className="p-2 pt-0 "
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className="basis-1/2">
                <fieldset className="mb-2 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Page Communicate button
                  </legend>
                  <input
                    className="p-2 pt-0 "
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className=" basis-full">
                <fieldset className="mb-2 border rounded-md ">
                  <legend className="mx-3 leading-[17px] text-[14px]">
                    Seller page User name
                  </legend>
                  <input
                    className="p-2 pt-0 "
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                  />
                </fieldset>
              </div>
              <div className=" basis-full">
                <h2 className="text-sm text-smallest-color">
                  Upload Document Photo
                </h2>
                <div className="flex items-center">
                  <div className="flex flex-col items-center p-1 basis-1/4">
                    <div className="justify-center w-full flex items-center border border-blue-700 flex-col  h-[70px] rounded-sm relative text-blue-700">
                      <span className="absolute text-white border rounded-full cursor-pointer top-1 right-1 bg-common-gray">
                        <BiMinus size={15} />
                      </span>
                      <span>
                        <HiPhotograph size={23} />
                      </span>
                      <p className="leading-[17px] text-[14px]">Add to album</p>
                    </div>
                    <p className="leading-[17px] text-[14px] self-start text-common-gray">
                      Shop Logo
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-1 basis-1/4">
                    <div className="justify-center w-full flex items-center border border-blue-700 flex-col  h-[70px] rounded-sm relative text-blue-700">
                      <span className="absolute text-white border rounded-full cursor-pointer top-1 right-1 bg-common-gray">
                        <BiMinus size={15} />
                      </span>
                      <span>
                        <HiPhotograph size={23} />
                      </span>
                      <p className="leading-[17px] text-[14px]">Add to album</p>
                    </div>
                    <p className="leading-[17px] text-[14px] self-start text-common-gray">
                      Shop Logo
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-1 basis-1/4">
                    <div className="justify-center w-full flex items-center border border-blue-700 flex-col  h-[70px] rounded-sm relative text-blue-700">
                      <span className="absolute text-white border rounded-full cursor-pointer top-1 right-1 bg-common-gray">
                        <BiMinus size={15} />
                      </span>
                      <span>
                        <HiPhotograph size={23} />
                      </span>
                      <p className="leading-[17px] text-[14px]">Add to album</p>
                    </div>
                    <p className="leading-[17px] text-[14px] self-start text-common-gray">
                      Shop Logo
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-1 basis-1/4">
                    <div className="justify-center w-full flex items-center border border-blue-700 flex-col  h-[70px] rounded-sm relative text-blue-700">
                      <span className="absolute text-white border rounded-full cursor-pointer top-1 right-1 bg-common-gray">
                        <BiMinus size={15} />
                      </span>
                      <span>
                        <HiPhotograph size={23} />
                      </span>
                      <p className="leading-[17px] text-[14px]">Add to album</p>
                    </div>
                    <p className="leading-[17px] text-[14px] self-start text-common-gray">
                      Shop Logo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 my-2">
              <button className="flex items-center w-full px-2 py-1 text-white rounded-sm bg-common-gray pl-[30%] cursor-pointer gap-1">
                <span>
                  <BiSave />
                </span>
                Save
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-white bg-red-700 rounded-sm">
                <span>
                  <svg
                    className="h-[20px] w-[20px] "
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                  </svg>
                </span>
                Cancel
              </button>
            </div>
          </form>
          <SellerInfo/>
        </div>
      </div>
    </div>
  );
}
