import { CREATE_PACKAGE, CREATE_PACKAGE_REQ, DELETE_PACKAGE, DELETE_PACKAGE_REQ, EDIT_PACKAGE, EDIT_PACKAGE_REQ, GET_ALL_SUBCATEGORIES } from "../../consts/admin/packageConst";

export const createPackageReducer = (
    state = { success: false, res: {} },
    action: any
  ) => {
    switch (action.type) {
      case CREATE_PACKAGE_REQ:
        return { ...state, success: false };
      case CREATE_PACKAGE:
        return {
          success:true,
          res: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const editPackageReducer = (state = { success: false }, action: any) => {
    switch (action.type) {
      case EDIT_PACKAGE_REQ:
        return { ...state, success: false };
      case EDIT_PACKAGE:
        return { ...state, success: true, res: action.payload };
      default:
        return state;
    }
  };


  export const deletePackageReducer = (
    state = { success: false },
    action: any
  ) => {
    switch (action.type) {
      case DELETE_PACKAGE_REQ:
        return { ...state, success: false };
      case DELETE_PACKAGE:
        return { ...state, success: true, res: action.payload };
      default:
        return state;
    }
  };

  export const getAllSubCatReducer = (state = { success: false, res:{} }, action: any) => {
    switch (action.type) {
      case GET_ALL_SUBCATEGORIES:
        return { ...state, success: true, res: action.payload };
      default:
        return state;
    }
  };