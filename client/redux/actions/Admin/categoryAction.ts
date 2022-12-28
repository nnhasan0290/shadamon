import axios from "axios";
import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_REQ,
  CREATE_SUBCATEGORY,
  CREATE_SUBCATEGORY_REQ,
  DELETE_CATEGORY,
  DELETE_CATEGORY_REQ,
  DELETE_SUB_CATEGORY,
  DELETE_SUB_CATEGORY_REQ,
  EDIT_CATEGORY,
  EDIT_CATEGORY_REQ,
  EDIT_SUB_CATEGORY,
  EDIT_SUB_CATEGORY_REQ,
  GET_ALL_BUTTONS,
  GET_CATEGORIES,
  GET_CATEGORIES_REQ,
  GET_CATEGORIES_UNDER_PARENT,
  GET_FEATURES,
  GET_FEATURE_UNDER_SUB,
  GET_LOCATIONS,
  GET_PARENT_CATEGORY,
  GET_SUB_CATEGORIES,
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
  dispatch({ type: CREATE_CATEGORY_REQ });
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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
      render: `${error.response.data.message}`,
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
};

export const getAllCategories = () => async (dispatch: any) => {
  dispatch({type:GET_CATEGORIES_REQ})
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/allcategorynsubcat`,
      config
    );
    dispatch({ type: GET_CATEGORIES, payload: data });
  } catch (error: any) {
    console.log(error);
  }
};
export const getFeaturesAction = () => async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/allfeatures`,
      config
    );
    dispatch({ type: GET_FEATURES, payload: data });
  } catch (error: any) {
    console.log(error);
  }
};

export const createSubCatAction = (formdata: any) => async (dispatch: any) => {
  const id = toast.loading("Please wait...");
  dispatch({type:CREATE_SUBCATEGORY_REQ})
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/addsubcategory`,
      formdata,
      config
    );
    dispatch({ type: CREATE_SUBCATEGORY, payload: data });
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

export const getLocationAction = () => async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/product/alllocations`,
      config
    );
    dispatch({ type: GET_LOCATIONS, payload: data });
  } catch (error: any) {
    console.log(error);
  }
};

export const getSubCategoriesAction = (id: any) => async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/getsubcatofcat/${id}`,
      config
    );
    dispatch({ type: GET_SUB_CATEGORIES, payload: data });
  } catch (error: any) {
    console.log(error);
  }
};
export const getCategoriesUnderParentAction =
  (id: any) => async (dispatch: any) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/api/admin/getcatofparent/${id}`,
        config
      );
      dispatch({ type: GET_CATEGORIES_UNDER_PARENT, payload: data });
    } catch (error: any) {
      console.log(error);
    }
  };
export const getFeatureUnderSubAction = (id: any) => async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/getfeaturesofsubcat/${id}`,
      config
    );
    dispatch({ type: GET_FEATURE_UNDER_SUB, payload: data });
  } catch (error: any) {
    console.log(error);
  }
};

export const deleteCategoryAction = (id: any) => async (dispatch: any) => {
  console.log("data");
  dispatch({ type: DELETE_CATEGORY_REQ });
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/deletecategory/${id}`,
      config
    );
    dispatch({ type: DELETE_CATEGORY, payload: data });
  } catch (error: any) {
    console.log(error);
    toast.error("Something Wrong");
  }
};

export const editCategoryAction = (formdata: any) => async (dispatch: any) => {
  const id = toast.loading("Please wait...");
  dispatch({ type: EDIT_CATEGORY_REQ });
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/editcategory`,
      formdata,
      config
    );
    dispatch({ type: EDIT_CATEGORY, payload: data });
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

export const getAllButtonsAction = () => async (dispatch: any) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/product/buttons`,
      config
    );
    dispatch({ type: GET_ALL_BUTTONS, payload: data });
  } catch (error: any) {
    console.log(error);
  }
};

export const editSubCategoryAction = (formdata: any) => async (dispatch: any) => {
  const id = toast.loading("Please wait...");
  dispatch({ type: EDIT_SUB_CATEGORY_REQ });
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/editsubcategory`,
      formdata,
      config
    );
    dispatch({ type: EDIT_SUB_CATEGORY, payload: data });
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

export const deleteSubCategoryAction = (id: any) => async (dispatch: any) => {
  console.log("data");
  dispatch({ type: DELETE_SUB_CATEGORY_REQ });
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_HOST}/api/admin/deletesubcat/${id}`,
      config
    );
    dispatch({ type: DELETE_SUB_CATEGORY, payload: data });
  } catch (error: any) {
    console.log(error);
    toast.error("Something Wrong");
  }
};

