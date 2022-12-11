
import Link from "next/link";
import WithEmail from "./WithEmailForm";

const ManualSignUp = ({ signState, setSignState, phone }: any) => {
  return (
    <>
      <div>
        <img src="/login-logo.png" alt="" width={100} height={100} />
      </div>
      <p className="font-semibold">Post an Ad</p>
      <p className="mb-2 text-sm">Please Sign Up to post your ad</p>

      <WithEmail signState={signState}/>


      
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
