import { GET_PARENT_CATEGORY } from "../../consts/admin/categoryConst";

interface dataType{
    res: object,
  }
  const initialState: dataType = {
    res: {}
  }
  export const GetParentCategoryReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case GET_PARENT_CATEGORY:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  
  export const createCategoryReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case GET_PARENT_CATEGORY:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  