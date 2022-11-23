import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { GlobalStates } from "../../context/ContextProvider";

const ManualSignUp = () => {
  const { signState, setSignState } = GlobalStates();
  const { data, status }: any = useSession();
  const [user, setUser] = useState(data?.user);
  console.log(user);
  return (
    <>
      <div>
        <img src="/login-logo.png" alt="" width={100} height={100} />
      </div>
      <p className="font-semibold">Post an Ad</p>
      <p className="mb-2 text-sm">Please Sign Up to post your ad</p>
      {signState === "SIGNUP" && (
        <div className="border w-[78%] my-1 rounded-md relative text-common-gray">
          <input
            className="p-2 peer focus:placeholder-transparent"
            type="tel"
            name=""
            id=""
            placeholder="Name"
            value={user?.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <label
            htmlFor=""
            className="absolute pl-2 text-xs top-0 left-0 visible text-[#777d83] peer-placeholder-shown:invisible peer-focus:visible"
          >
            Name
          </label>
        </div>
      )}
      <div className="border w-[78%] my-1 rounded-md relative text-common-gray">
        <input
          className="p-2 peer focus:placeholder-transparent "
          type="email"
          name=""
          id=""
          placeholder="Email or Phone number"
          value={user?.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label
          htmlFor=""
          className="absolute pl-2 text-xs top-0 left-0 visible text-[#777d83] peer-placeholder-shown:invisible peer-focus:visible"
        >
          Email or Phone number
        </label>
      </div>
      <div className="border w-[78%] my-1 rounded-md relative text-common-gray">
        <input
          className="p-2 peer focus:placeholder-transparent"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <label
          htmlFor=""
          className="absolute pl-2 text-xs top-0 left-0 visible text-[#777d83] peer-placeholder-shown:invisible peer-focus:visible"
        >
          Password
        </label>
      </div>
      {signState === "LOGIN" ? (
        <button className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color">
          <p className="mx-auto">Login</p>
        </button>
      ) : (
        <button className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color">
          <p className="mx-auto">Sign Up</p>
        </button>
      )}

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
        {signState === "LOGIN" && (
          <div className="font-semibold text-center text-blue-600">
            <Link href="#"> Forgot Password?</Link>
          </div>
        )}
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

export default ManualSignUp;
