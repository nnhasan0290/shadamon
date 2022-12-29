import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_REQ,
  CREATE_FEATURE,
  CREATE_FEATURE_REQ,
  CREATE_SUBCATEGORY,
  CREATE_SUBCATEGORY_REQ,
  DELETE_CATEGORY,
  DELETE_CATEGORY_REQ,
  DELETE_FEATURE,
  DELETE_FEATURE_REQ,
  DELETE_SUB_CATEGORY,
  DELETE_SUB_CATEGORY_REQ,
  EDIT_CATEGORY,
  EDIT_CATEGORY_REQ,
  EDIT_FEATURE,
  EDIT_FEATURE_REQ,
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
  GET_PARENT_CAT_SUB,
  GET_SUB_CATEGORIES,
} from "../../consts/admin/categoryConst";

interface dataType {
  res: object;
}
const initialState: dataType = {
  res: {},
};
export const GetParentCategoryReducer = (
  state = { res: { data: [] } },
  action: any
) => {
  switch (action.type) {
    case GET_PARENT_CATEGORY:
      return {
        res: action.payload,
      };

    default:
      return state;
  }
};
export const getParentCatSubReducer = (
  state = { res: { data: [] } },
  action: any
) => {
  switch (action.type) {
    case GET_PARENT_CAT_SUB:
      return {
        res: action.payload,
      };

    default:
      return state;
  }
};

export const createCategoryReducer = (
  state = { success: false },
  action: any
) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQ:
      return { ...state, success: false };
    case CREATE_CATEGORY:
      return { ...state, success: true, res: action.payload };
    default:
      return state;
  }
};

export const getAllCategoryReducer = (
  state = { success: false, res: {} },
  action: any
) => {
  switch (action.type) {
    case GET_CATEGORIES_REQ:
      return {
        ...state,
        success: false,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        success: true,
        res: action.payload,
      };

    default:
      return state;
  }
};

export const getFeaturesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_FEATURES:
      return {
        res: action.payload,
      };

    default:
      return state;
  }
};

export const createSubCatReducer = (
  state = { success: false, res: {} },
  action: any
) => {
  switch (action.type) {
    case CREATE_SUBCATEGORY_REQ:
      return {
        ...state,
        success: false,
      };
    case CREATE_SUBCATEGORY:
      return {
        ...state,
        success: true,
        res: action.payload,
      };

    default:
      return state;
  }
};

export const getLocationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        res: action.payload,
      };

    default:
      return state;
  }
};

export const getSubCatReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SUB_CATEGORIES:
      return {
        res: action.payload,
      };

    default:
      return state;
  }
};

export const getCatUnderParentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATEGORIES_UNDER_PARENT:
      return {
        res: action.payload,
      };

    default:
      return state;
  }
};
export const getFeatureUnderSubReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_FEATURE_UNDER_SUB:
      return {
        res: action.payload,
      };

    default:
      return state;
  }
};

export const deleteCategoryReducer = (
  state = { success: false },
  action: any
) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQ:
      return { ...state, success: false };
    case DELETE_CATEGORY:
      return { ...state, success: true, res: action.payload };
    default:
      return state;
  }
};

export const editCategoryReducer = (
  state = { success: false },
  action: any
) => {
  switch (action.type) {
    case EDIT_CATEGORY_REQ:
      return { ...state, success: false };
    case EDIT_CATEGORY:
      return { ...state, success: true, res: action.payload };
    default:
      return state;
  }
};

export const getButtonsReducer = (
  state = { res: { data: [] } },
  action: any
) => {
  switch (action.type) {
    case GET_ALL_BUTTONS:
      return {
        res: action.payload,
      };

    default:
      return state;
  }
};

export const editSubCategoryReducer = (
  state = { success: false },
  action: any
) => {
  switch (action.type) {
    case EDIT_SUB_CATEGORY_REQ:
      return { ...state, success: false };
    case EDIT_SUB_CATEGORY:
      return { ...state, success: true, res: action.payload };
    default:
      return state;
  }
};

export const deleteSubCategoryReducer = (
  state = { success: false },
  action: any
) => {
  switch (action.type) {
    case DELETE_SUB_CATEGORY_REQ:
      return { ...state, success: false };
    case DELETE_SUB_CATEGORY:
      return { ...state, success: true, res: action.payload };
    default:
      return state;
  }
};

export const createFeatureReducer = (
  state = { success: false, res: {} },
  action: any
) => {
  switch (action.type) {
    case CREATE_FEATURE_REQ:
      return {
        ...state,
        success: false,
      };
    case CREATE_FEATURE:
      return {
        ...state,
        success: true,
        res: action.payload,
      };

    default:
      return state;
  }
};
export const editFeatureReducer = (
  state = { success: false, res: {} },
  action: any
) => {
  switch (action.type) {
    case EDIT_FEATURE_REQ:
      return {
        ...state,
        success: false,
      };
    case EDIT_FEATURE:
      return {
        ...state,
        success: true,
        res: action.payload,
      };

    default:
      return state;
  }
};
export const deleteFeatureReducer = (
  state = { success: false, res: {} },
  action: any
) => {
  switch (action.type) {
    case DELETE_FEATURE_REQ:
      return {
        ...state,
        success: false,
      };
    case DELETE_FEATURE:
      return {
        ...state,
        success: true,
        res: action.payload,
      };

    default:
      return state;
  }
};

