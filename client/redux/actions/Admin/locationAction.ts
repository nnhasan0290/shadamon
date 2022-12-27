import { toast } from "react-toastify";
import axios from "axios";
import {
  CREATE_LOCATION,
  CREATE_LOCATION_REQ,
  CREATE_PARENT_LOCATION,
  CREATE_PARENT_LOCATION_REQ,
  DELETE_PARENT_LOCATION,
  DELETE_PARENT_LOCATION_REQ,
  EDIT_PARENT_LOCATION,
  EDIT_PARENT_LOCATION_REQ,
  SUB_LOCATION_EDIT,
  SUB_LOCATION_EDIT_REQ
} from "../../consts/admin/locationConst";

export const createParentLocationAction =
  (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    dispatch({type:CREATE_PARENT_LOCATION_REQ})
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
    dispatch({type: CREATE_LOCATION_REQ})
    try {
      const config = {
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
    dispatch({type:EDIT_PARENT_LOCATION_REQ})
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
    dispatch({ type: DELETE_PARENT_LOCATION_REQ });
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

  export const editSubLocationAction =
  (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    dispatch({type: SUB_LOCATION_EDIT_REQ })
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/product/editSubLocation`,
        formdata,
        config
      );
      dispatch({ type: SUB_LOCATION_EDIT, payload: data });
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
