import { toast } from "react-toastify";
import axios from "axios";
import {
  APPROVE_PD_IMG,
  APPROVE_PD_IMG_REQ,
  CREATE_PRODUCT,
  CREATE_PRODUCT_REQ,
  DELETE_PRODUCT,
  DELETE_PRODUCT_IMG,
  DELETE_PRODUCT_IMG_REQ,
  DELETE_PRODUCT_REQ,
  EDIT_PRODUCT,
  EDIT_PRODUCT_REQ,
  GET_ALL_PRODUCT,
} from "../../consts/admin/productConst ";
export const createProductAction = (formdata: any) => async (dispatch: any) => {
  const id = toast.loading("Please wait...");
  dispatch({type: CREATE_PRODUCT_REQ})
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/product/addproduct`,
      formdata,
      config
    );
    dispatch({ type: CREATE_PRODUCT, payload: data });
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

export const getAllProductsAction = () => async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/product/allproducts`,
      config
    );
    dispatch({ type: GET_ALL_PRODUCT, payload: data });
  } catch (error: any) {
    console.log(error);
  }
};

export const editProductAction = (formdata: any) => async (dispatch: any) => {
  const id = toast.loading("Please wait...");
  dispatch({ type: EDIT_PRODUCT_REQ });
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/product/updateproduct`,
      formdata,
      config
    );
    dispatch({ type: EDIT_PRODUCT, payload: data });
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

export const deleteProductAction = (id: any) => async (dispatch: any) => {
  console.log("data");
  dispatch({ type: DELETE_PRODUCT_REQ });
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_HOST}/api/product/deleteproductbyid/${id}`,
      config
    );
    dispatch({ type: DELETE_PRODUCT, payload: data });
  } catch (error: any) {
    console.log(error);
    toast.error("Something Wrong");
  }
};

export const deletePdImgAction = (values:any) => async (dispatch: any) => {
  dispatch({ type: DELETE_PRODUCT_IMG_REQ });
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/product/productimgdelete`,values,
      config
    );
    dispatch({ type: DELETE_PRODUCT_IMG, payload: data });
  } catch (error: any) {
    console.log(error);
    toast.error("Something Wrong");
  }
};
export const approvePdImgAction = (values:any) => async (dispatch: any) => {
  dispatch({ type: APPROVE_PD_IMG_REQ });
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/product/approvephoto`,values,
      config
    );
    dispatch({ type: APPROVE_PD_IMG, payload: data });
  } catch (error: any) {
    console.log(error);
    toast.error("Something Wrong");
  }
};
