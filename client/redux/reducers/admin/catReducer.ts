import { CREATE_SUBCATEGORY, GET_CATEGORIES, GET_FEATURES, GET_LOCATIONS, GET_PARENT_CATEGORY } from "../../consts/admin/categoryConst";

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
  
  export const getAllCategoryReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case GET_CATEGORIES:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  
  export const getFeaturesReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case GET_FEATURES:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  
  export const createSubCatReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case CREATE_SUBCATEGORY:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  
  export const getLocationReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case GET_LOCATIONS:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  