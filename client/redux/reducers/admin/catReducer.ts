import {  CREATE_CATEGORY, CREATE_CATEGORY_REQ, CREATE_SUBCATEGORY, DELETE_CATEGORY, DELETE_CATEGORY_REQ, EDIT_CATEGORY, EDIT_CATEGORY_REQ, GET_ALL_BUTTONS, GET_CATEGORIES, GET_CATEGORIES_UNDER_PARENT, GET_FEATURES, GET_FEATURE_UNDER_SUB, GET_LOCATIONS, GET_PARENT_CATEGORY, GET_SUB_CATEGORIES } from "../../consts/admin/categoryConst";

interface dataType{
    res: object,
  }
  const initialState: dataType = {
    res: {}
  }
  export const GetParentCategoryReducer = (state = {res:{data:[]}}, action:any) => {
      switch (action.type) {
        case GET_PARENT_CATEGORY:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  

  export const createCategoryReducer = (state = {success:false}, action:any) => {
    switch (action.type) {
      case CREATE_CATEGORY_REQ :
        return {...state, success: false}
      case CREATE_CATEGORY:
        return {...state, success:true, res: action.payload}
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
  
  export const getSubCatReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case GET_SUB_CATEGORIES:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  
  export const getCatUnderParentReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case GET_CATEGORIES_UNDER_PARENT:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
  export const getFeatureUnderSubReducer = (state = initialState, action:any) => {
      switch (action.type) {
        case GET_FEATURE_UNDER_SUB:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };

    export const deleteCategoryReducer = (state = {success:false}, action: any) => {
      switch (action.type) {
        case DELETE_CATEGORY_REQ :
          return {...state, success: false}
        case DELETE_CATEGORY:
          return {...state, success:true, res: action.payload}
        default:
          return state;
      }
    };

    export const editCategoryReducer = (state = {success:false}, action: any) => {
      switch (action.type) {
        case EDIT_CATEGORY_REQ :
          return {...state, success: false}
        case EDIT_CATEGORY:
          return {...state, success:true, res: action.payload}
        default:
          return state;
      }
    };

    export const getButtonsReducer = (state = {res:{data:[]}}, action:any) => {
      switch (action.type) {
        case GET_ALL_BUTTONS:
          return {
            res: action.payload
          };
    
        default:
          return state;
      }
    };
    
  
 