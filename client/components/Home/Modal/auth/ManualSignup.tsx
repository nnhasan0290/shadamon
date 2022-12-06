import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalStates } from "../../../../context/ContextProvider";
import PostAdd from "./PostAdd";

let schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
});

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const ManualSignUp = ({ signState, setSignState }: any) => {
  const { data, status }: any = useSession();
  console.log(data);
  const [user, setUser] = useState(data?.user);
  const {modalDispatch} = GlobalStates()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    modalDispatch({type: "GLOBAL_MODAL", payload: <PostAdd/>})
    console.log(data);
  };
  return (
    <>
      <div>
        <img src="/login-logo.png" alt="" width={100} height={100} />
      </div>
      <p className="font-semibold">Post an Ad</p>
      <p className="mb-2 text-sm">Please Sign Up to post your ad</p>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-full"
      >
        {signState === "SIGNUP" && (
          <div className="border w-[78%] my-1 rounded-md relative text-common-gray">
            <input
              {...register("name")}
              className="p-2 peer focus:placeholder-transparent"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={user?.name}
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
            {...register("email")}
            className="p-2 peer focus:placeholder-transparent"
            type="email"
            name="email"
            id=""
            value={user?.email}
            placeholder="Email or Phone number"
          />
          <label
            htmlFor=""
            className="absolute pl-2 text-xs top-0 left-0 visible text-[#777d83] peer-placeholder-shown:invisible peer-focus:visible"
          >
            Email or Phone number
          </label>
        </div>
        <p className="text-xs text-red-600 capitalize">{errors?.email?.message}</p>
        <div className="border w-[78%] my-1 rounded-md relative text-common-gray">
          <input
            {...register("password")}
            className="p-2 peer focus:placeholder-transparent"
            type="password"
            name="password"
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
        <p className="text-xs text-red-600 capitalize">{errors?.password?.message}</p>
        {signState === "LOGIN" ? (
          <button
            type="submit"
            className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color"
          >
            <p className="mx-auto">Login</p>
          </button>
        ) : (
          <button
            type="submit"
            className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color"
          >
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
      </form>
    </>
  );
};

export default ManualSignUp;
