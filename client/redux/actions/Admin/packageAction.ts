import { toast } from "react-toastify";
import axios from "axios";
import { CREATE_PACKAGE, CREATE_PACKAGE_REQ, DELETE_PACKAGE, DELETE_PACKAGE_REQ, EDIT_PACKAGE, EDIT_PACKAGE_REQ, GET_ALL_PACKAGE } from "../../consts/admin/packageConst";

export const createPackageAction = (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    dispatch({type: CREATE_PACKAGE_REQ})
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/addpackage`,
        formdata,
        config
      );
      dispatch({ type: CREATE_PACKAGE, payload: data });
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
  

  export const editPackageAction = (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    dispatch({ type: EDIT_PACKAGE_REQ });
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/editpackage`,
        formdata,
        config
      );
      dispatch({ type: EDIT_PACKAGE, payload: data });
      toast.update(id, {
        render: `${data.message}`,
        type: "success",
        isLoading: false,
        autoClose: 2000,
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


  export const deletePackageAction = (id: any) => async (dispatch: any) => {
    console.log("data");
    dispatch({ type: DELETE_PACKAGE_REQ });
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/deletepackage/${id}`,
        config
      );
      dispatch({ type: DELETE_PACKAGE, payload: data });
    } catch (error: any) {
      console.log(error);
      toast.error("Something Wrong");
    }
  };



  export const getAllPackageAction = () => async (dispatch: any) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/getallpackage`,
        config
      );
      dispatch({ type: GET_ALL_PACKAGE, payload: data });
    } catch (error: any) {
      console.log(error);
    }
  };
  
  