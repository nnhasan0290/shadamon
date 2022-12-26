import { toast } from "react-toastify";
import axios from "axios";
import {
  CREATE_LOCATION,
  CREATE_PARENT_LOCATION,
  DELETE_PARENT_LOCATION,
  EDIT_PARENT_LOCATION,
} from "../../consts/admin/locationConst";

export const createParentLocationAction =
  (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/product/location`,
        formdata,
        config
      );
      dispatch({ type: CREATE_PARENT_LOCATION, payload: data });
      toast.update(id, {
        render: `${data.message}`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error: any) {
      console.log(error);
      toast.update(id, {
        render: `${error.response.data.message}`,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };
export const createLocationAction =
  (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/product/postsublocation`,
        formdata,
        config
      );
      dispatch({ type: CREATE_LOCATION, payload: data });
      toast.update(id, {
        render: `${data.message}`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error: any) {
      console.log(error);
      toast.update(id, {
        render: `${error.response.data.message}`,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

export const editParentLocationAction =
  (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/product/editlocation`,
        formdata,
        config
      );
      dispatch({ type: EDIT_PARENT_LOCATION, payload: data });
      toast.update(id, {
        render: `${data.message}`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error: any) {
      console.log(error);
      toast.update(id, {
        render: `${error.response.data.message}`,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };
export const deleteParentLocationAction =
  (id: any) => async (dispatch: any) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_HOST}/api/product//deletelocation/${id}`,
        config
      );
      dispatch({ type: DELETE_PARENT_LOCATION, payload: data });
    } catch (error: any) {
      console.log(error);
      toast.error("Something Wrong");
    }
  };
