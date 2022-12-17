import axios from "axios";
import {
  CREATE_CATEGORY,
  GET_CATEGORIES,
  GET_PARENT_CATEGORY,
} from "../../consts/admin/categoryConst";
import { toast } from "react-toastify";

export const getParentCategories = () => async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/allparentcat`,
      config
    );
    dispatch({ type: GET_PARENT_CATEGORY, payload: data });
  } catch (error: any) {}
};

export const createCategory = (formdata: any) => async (dispatch: any) => {
  const id = toast.loading("Please wait...");
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/addcategory`,
      formdata,
      config
    );
    dispatch({ type: CREATE_CATEGORY, payload: data });
    toast.update(id, {
      render: `${data.message}`,
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  } catch (error: any) {
    console.log(error);
    toast.update(id, {
      render: `${error.response.data.message._message}`,
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};


export const getAllCategories = () => async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/getallcategory`,
      config
    );
    dispatch({ type: GET_CATEGORIES, payload: data });
  } catch (error: any) {
    console.log(error)
  }
};