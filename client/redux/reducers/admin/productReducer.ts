import { CREATE_PRODUCT, DELETE_PRODUCT, DELETE_PRODUCT_REQ, EDIT_PRODUCT, EDIT_PRODUCT_REQ, GET_ALL_PRODUCT } from "../../consts/admin/productConst ";


interface dataType{
    res: object,
  }
  const initialState: dataType = {
    res: {}
  }
export const createProductReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case CREATE_PRODUCT:
        return {
          res: action.payload
        };
  
      default:
        return state;
    }
  };
export const getAllProductReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case GET_ALL_PRODUCT:
        return {
          res: action.payload
        };
  
      default:
        return state;
    }
  };

  export const editProductReducer = (
    state = { success: false },
    action: any
  ) => {
    switch (action.type) {
      case EDIT_PRODUCT_REQ:
        return { ...state, success: false };
      case EDIT_PRODUCT:
        return { ...state, success: true, res: action.payload };
      default:
        return state;
    }
  };

  export const deleteProductReducer = (
    state = { success: false },
    action: any
  ) => {
    switch (action.type) {
      case DELETE_PRODUCT_REQ:
        return { ...state, success: false };
      case DELETE_PRODUCT:
        return { ...state, success: true, res: action.payload };
      default:
        return state;
    }
  };


