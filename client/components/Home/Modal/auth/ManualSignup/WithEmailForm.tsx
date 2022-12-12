
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { clearError, loginAction, signUpAction } from "../../../../../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import {message} from "antd";
import { RootState } from "../../../../../redux/store";

let schema = yup.object().shape({
  name: yup.string(),
  password: yup.string().min(6).max(15).required(),
});

interface IFormInputs {
  name: string;
  password: string;
  email: string;
}

const WithEmail = ({ signState }: any) => {
  const [messageApi, contextHolder] = message.useMessage()
  const regExp = /[a-zA-Z]/g;
  const {signUp, login:{error,msg, success, loading}} = useAppSelector<any>((state: RootState) => state);
  
  // const { modalDispatch } = GlobalStates();
  // const { data, status }: any = useSession();

  // const [user, setUser] = useState(data?.user);
  // const [name, setName] = useState(user?.name);
  // const [email, setEmail] = useState(user?.email);
  const showError = () => {
    messageApi.open({
      type: 'error',
      content: `${error}`,
    });
  }

  useEffect(() => {
    if(error){
      showError();
    }
    dispatch(clearError());
  },[error])

  const dispatch:any = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
   
    if(signState !== 'LOGIN'){
      if (regExp.test(data.email)) {
       dispatch(signUpAction(data))
      } else {
        dispatch(signUpAction({name: data.name, phone: data.email, password: data.password}))
      }
      
    } else{
      dispatch(loginAction({emailphone: data.email, password: data.password}));
    }

    // modalDispatch({ type: "GLOBAL_MODAL", payload: <PostAdd /> });
  };
  return (
    <>
    {contextHolder}
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-full"
      >
        {signState === "SIGNUP" && (
          <>
            <div className="border w-[78%] my-1 rounded-md relative text-common-gray">
              <input
                {...register("name")}
                className="p-2 peer focus:placeholder-transparent"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <label
                htmlFor=""
                className="absolute pl-2 text-xs top-0 left-0 visible text-[#777d83] peer-placeholder-shown:invisible peer-focus:visible"
              >
                Name
              </label>
            </div>
            <p className="text-xs text-red-600 capitalize">
              {errors?.name?.message}
            </p>
          </>
        )}

        <div className="border w-[78%] my-1 rounded-md relative text-common-gray">
          <input
            {...register("email")}
            className="p-2 peer focus:placeholder-transparent"
            type="text"
            name="email"
            id="email"
            placeholder="Email or Phone number"
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
        <p className="text-xs text-red-600 capitalize">
          {errors?.password?.message}
        </p>
        <button
          type="submit"
          className="pl-5 my-1 border flex items-center gap-3 w-[78%] rounded-md p-2 text-white bg-common-color"
        >
          {signState === "LOGIN" ? (
            <p className="mx-auto">Login</p>
          ) : (
            <p className="mx-auto">Sign Up</p>
          )}
        </button>
        <hr className="w-[78%] border my-3" />
      </form>
    </>
  );
};

export default WithEmail;
