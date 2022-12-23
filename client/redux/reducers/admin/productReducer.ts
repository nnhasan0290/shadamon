import { CREATE_PRODUCT, GET_ALL_PRODUCT } from "../../consts/admin/productConst ";


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


