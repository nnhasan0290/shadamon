import axios from "axios";
import { GlobalStates } from "../../context/ContextProvider";

import {
  LOAD_USER_FAIL,
  LOAD_USER_REQ,
  LOAD_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQ,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_REQ,
  SIGNUP_USER_SUCCESS,
} from "../consts/userConst";

export const signUpAction = (myForm: any) => async (dispatch: any) => {
  try {
    dispatch({ type: SIGNUP_USER_REQ });
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
  } catch (error: any) {
    dispatch({ type: SIGNUP_USER_FAIL, payload: error.response.data.error });
  }
};

export const loginAction = (myForm: any) => {
  return async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/login`,
      myForm,
      config
    );
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error });
  }
}
}


export const loadAction = () => async (dispatch: any) => {
  try {
    dispatch({ type: LOAD_USER_REQ });
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
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.error });
  }
};

export const clearError = () => (dispatch:any) => {
  dispatch({type: "CLEAR_ERROR"})
}

