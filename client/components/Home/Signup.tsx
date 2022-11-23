import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GlobalStates } from "../../context/ContextProvider";
import { signIn } from "next-auth/react";

const SignUp = ({ emailState }: any) => {
  const { signState, setSignState } = GlobalStates();

  return (
    <>
      <div className="pt-5 pb-3">
        <span className="px-2 py-1 bg-[#e4e4e4] rounded-l-md">বাংলা</span>
        <span className="px-2 py-1 text-white bg-blue-600 rounded-r-md">
          ENG
        </span>
      </div>
      <div>
        <img src="/signup-logo.png" alt="" width={100} height={100} />
      </div>
      <p className="font-semibold">Post an Ad</p>
      <p className="mb-2 text-sm">Please Sign Up to post your ad</p>
      {!(signState === "LOGIN") && (
        <>
          <div className="border w-[78%] rounded-md ">
            <select name="" id="" className="py-2">
              <option value="bd">+880</option>
            </select>
            <input
              className="py-2 pl-2 w-auto"
              type="tel"
              name=""
              id=""
              placeholder="Enter mobile number"
            />
          </div>
          <button
            className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color disabled:opacity-70"
            disabled
          >
            <p className="mx-auto">Continue</p>
          </button>
          <p>OR</p>
        </>
      )}

      <button
        type="submit"
        className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2"
        onClick={() => signIn("google")}
      >
        <div>
          <FcGoogle />
        </div>
        <p>Continue with Google</p>
      </button>
      <button
        className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-blue-900"
        onClick={() => signIn("facebook")}
      >
        <div>
          <RiFacebookBoxLine />
        </div>
        <p>Continue with Facebook</p>
      </button>
      <button
        className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 bg-common-color text-white"
        onClick={() => emailState(true)}
      >
        <div>
          <BiEnvelope />
        </div>
        <p>Continue with Email or Phone Number</p>
      </button>
      <hr className="w-[78%] border my-3" />
      <div className="text-center">
        <p className="text-sm italic">
          {signState === "LOGIN" ? "Don't" : "Already"} Have an Account?
        </p>
        <button
          className="w-[150px] bg-[#e4e4e4] p-2 rounded-md"
          onClick={() => {
            if (signState === "LOGIN") {
              setSignState("SIGNUP");
            } else {
              setSignState("LOGIN");
            }
          }}
        >
          {signState === "LOGIN" ? "Sign Up" : "Login"}
        </button>
        <ul className="flex gap-5 my-4 text-xs list-disc text-common-gray">
          <li>Posting Rules</li>
          <li>Posting Allowance</li>
          <li>Helpline</li>
          <li>Help Chat</li>
        </ul>
      </div>
    </>
  );
};

export default SignUp;
