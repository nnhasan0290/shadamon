import axios from "axios";
import { toast } from "react-toastify";

import {
  LOAD_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
} from "../consts/userConst";

export const signUpAction = (myForm: any) => async (dispatch: any) => {
  const id = toast.loading("Please wait...")
  try {
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/register`,
      myForm,
      config
    );
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: data });
    toast.update(id, { render: `${data.message}`, type: "success", isLoading: false,autoClose:3000 });
  } catch (error: any) {
    console.log(error);
    toast.update(id, { render: `${error.response.data.message}`, type: "error", isLoading: false,autoClose:2000 });
  }
};

export const loginAction = (myForm: any) => {
  return async (dispatch: any) => {
    const id = toast.loading("Please wait...")
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/login`,
        myForm,
        config
      );
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
      toast.update(id, { render: `${data.message}`, type: "success", isLoading: false,autoClose:3000 });
    } catch (error: any) {
      toast.update(id, {  render: `${error.response.data.message}`, type: "error", isLoading: false,autoClose:3000 });
    }
  };
};

export const loadAction = () => async (dispatch: any) => {
  try {
    console.log(process.env.NEXT_PUBLIC_HOST);
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/cookiefind`,
      config
    );
    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error: any) {
  }
};