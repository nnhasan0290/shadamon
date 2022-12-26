import { CREATE_LOCATION, CREATE_PARENT_LOCATION, EDIT_PARENT_LOCATION } from "../../consts/admin/locationConst";

interface dataType {
  res: object;
}
const initialState: dataType = {
  res: {},
};

export const createLocationReducer = (state = initialState, action: any) => {
  if (action.type === CREATE_LOCATION) {
    return { res: action.payload.data };
  } else {
    return state;
  }
};
export const createParentLocationReducer = (state = initialState, action: any) => {
  if (action.type === CREATE_PARENT_LOCATION) {
    return { res: action.payload };
  } else {
    return state;
  }
};
export const editParentLocationReducer = (state = initialState, action: any) => {
  if (action.type === EDIT_PARENT_LOCATION) {
    return { res: action.payload };
  } else {
    return state;
  }
};
