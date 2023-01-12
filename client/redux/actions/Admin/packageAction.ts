import { toast } from "react-toastify";
import axios from "axios";
import { ADD_VAT, ADD_VAT_REQ, CREATE_COUPON, CREATE_COUPON_REQ, CREATE_PACKAGE, CREATE_PACKAGE_REQ, DELETE_COUPON, DELETE_COUPON_REQ, DELETE_PACKAGE, DELETE_PACKAGE_REQ, EDIT_COUPON, EDIT_COUPON_REQ, EDIT_PACKAGE, EDIT_PACKAGE_REQ, GET_ALL_PACKAGE, GET_ALL_SORTS, GET_ALL_SUBCATEGORIES, GET_VAT_DETAILS } from "../../consts/admin/packageConst";

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
        `${process.env.NEXT_PUBLIC_HOST}/api/package/packages`,
        config
      );
      dispatch({ type: GET_ALL_PACKAGE, payload: data });
    } catch (error: any) {
      console.log(error);
    }
  };
  export const getAllSubCatAction = () => async (dispatch: any) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/api/admin/allsubcategory`,
        config
      );
      dispatch({ type: GET_ALL_SUBCATEGORIES, payload: data });
    } catch (error: any) {
      console.log(error);
    }
  };

  export const getAllSortsAction = () => async (dispatch: any) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/sort`,
        config
      );
      dispatch({ type: GET_ALL_SORTS, payload: data });
    } catch (error: any) {
      console.log(error);
    }
  };
  

  export const createCouponAction = (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    dispatch({type: CREATE_COUPON_REQ})
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/coupon`,
        formdata,
        config
      );
      dispatch({ type: CREATE_COUPON, payload: data });
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
  
  export const addVatAction = (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    dispatch({type: ADD_VAT_REQ})
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/addvat`,
        formdata,
        config
      );
      dispatch({ type: ADD_VAT, payload: data });
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

  export const editCouponAction = (formdata: any) => async (dispatch: any) => {
    const id = toast.loading("Please wait...");
    dispatch({ type: EDIT_COUPON_REQ });
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/editcoupone`,
        formdata,
        config
      );
      dispatch({ type: EDIT_COUPON, payload: data });
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

  export const deleteCouponAction = (id: any) => async (dispatch: any) => {
    console.log("data");
    dispatch({ type: DELETE_COUPON_REQ });
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/deletecoupon/${id}`,
        config
      );
      dispatch({ type: DELETE_COUPON, payload: data });
    } catch (error: any) {
      console.log(error);
      toast.error("Something Wrong");
    }
  };

  export const getVatDetailsAction = () => async (dispatch: any) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/api/package/vat`,
        config
      );
      dispatch({ type: GET_VAT_DETAILS, payload: data });
    } catch (error: any) {
      console.log(error);
    }
  };

  