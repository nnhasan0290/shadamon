import Link from "next/link";

const ManualSignUp = () => {
  return (
    <>
      <div>
        <img src="/login-logo.png" alt="" width={100} height={100} />
      </div>
      <p className="font-semibold">Post an Ad</p>
      <p className="text-sm mb-2">Please Sign Up to post your ad</p>
      <div className="border w-[300px] rounded-md relative text-common-gray">
        <input
          className="p-2 peer focus:placeholder-transparent"
          type="tel"
          name=""
          id=""
          placeholder="Name"
        />
        <label
          htmlFor=""
          className="absolute pl-2 text-xs peer-focus:visible top-0 left-0 invisible text-[#777d83]"
        >
          Name
        </label>
      </div>
      <button className="pl-5 my-1 border flex items-center gap-3 w-[300px] rounded-md p-2 text-white bg-common-color">
        <p className="mx-auto">Sign Up</p>
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

export default ManualSignUp;
