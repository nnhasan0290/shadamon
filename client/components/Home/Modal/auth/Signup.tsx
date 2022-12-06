import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GlobalStates } from "../../../../context/ContextProvider";
import { signIn, useSession } from "next-auth/react";
import ManualSignUp from "./ManualSignup";

const SignUp = () => {
  const [signState, setSignState] = useState("SIGNUP");
  const [emailState, setEmailState] = useState(false);
  const [phoneState, setPhoneState] = useState("");
  const {status} = useSession();

  useEffect(() => {
    if(status === "authenticated"){
      setEmailState(true);
    }
  },[status])

  return (
    <>
      {!emailState ? (
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
            <form onSubmit={(e) => {
              e.preventDefault();
              setEmailState(true);
            }} action="" className="flex flex-col items-center w-full justify-content-center">
              <div
                className="border w-[78%] rounded-md "
                id="recaptcha-container"
              >
                <select name="" id="" className="py-2">
                  <option value="bd">+880</option>
                </select>
                <input
                onChange={(e:any) => {setPhoneState(e.target.value)}}
                  className="py-2 pl-2 w-auto"
                  type="tel"
                  name=""
                  minLength={9}
                  id=""
                  value={phoneState}
                  required
                  placeholder="Enter mobile number"
                />
              </div>
              <button
              type="submit"
                className={`pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color disabled:opacity-70`}
                disabled={!phoneState}
              >
                <p className="mx-auto">Continue</p>
              </button>
              <p>OR</p>
              </form>
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
            onClick={() => setEmailState(!emailState)}
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
      ) : (
        <ManualSignUp phone={phoneState} signState={signState} setSignState={setSignState} />
      )}
    </>
  );
};

export default SignUp;
