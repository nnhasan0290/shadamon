import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div>
        <img src="/signup-logo.png" alt="" width={100} height={100} />
      </div>
      <p className="font-semibold">Post an Ad</p>
      <p className="text-sm mb-2">Please Sign Up to post your ad</p>
      <div className="border w-[300px] rounded-md ">
        <select name="" id="" className="p-2">
          <option value="bd">+880</option>
        </select>
        <input
          className="p-2"
          type="tel"
          name=""
          id=""
          placeholder="Enter mobile number"
        />
      </div>
      <button className="pl-5 my-1 border flex items-center gap-3 w-[300px] rounded-md p-2 text-white bg-common-color">
        <p className="mx-auto">Continue</p>
      </button>
      <p>OR</p>
      <button className="pl-5 my-1 border flex items-center gap-3 w-[300px] rounded-md p-2">
        <div>
          <FcGoogle />
        </div>
        <p>Continue with Google</p>
      </button>
      <button className="pl-5 my-1 border flex items-center gap-3 w-[300px] rounded-md p-2 text-white bg-blue-900">
        <div>
          <RiFacebookBoxLine />
        </div>
        <p>Continue with Facebook</p>
      </button>
      <button className="pl-5 my-1 border flex items-center gap-3 w-[300px] rounded-md p-2 bg-common-color text-white">
        <div>
          <BiEnvelope />
        </div>
        <p>Continue with Email</p>
      </button>
      <hr className="w-[300px] border my-3" />
      <div>
        <p className="text-sm">Already Have a Account?</p>
        <button className="w-[150px] bg-muted-color p-2 rounded-md">
          Login
        </button>
        <div className="font-semibold text-blue-600 text-center">
          <Link href="#"> Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
