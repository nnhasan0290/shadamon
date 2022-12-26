import { CREATE_LOCATION, CREATE_LOCATION_REQ, CREATE_PARENT_LOCATION, CREATE_PARENT_LOCATION_REQ, DELETE_PARENT_LOCATION, DELETE_PARENT_LOCATION_REQ, EDIT_PARENT_LOCATION, EDIT_PARENT_LOCATION_REQ } from "../../consts/admin/locationConst";

interface dataType {
  res: object;
}
const initialState: dataType = {
  res: {},
};

export const createLocationReducer = (state = {success:false}, action: any) => {
  switch (action.type) {
    case CREATE_LOCATION_REQ :
      return {...state, success: false}
    case CREATE_LOCATION:
      return {...state, success:true, res: action.payload}
    default:
      return state;
  }
};
export const createParentLocationReducer = (state = {success:false}, action: any) => {
  switch (action.type) {
    case CREATE_PARENT_LOCATION_REQ :
      return {...state, success: false}
    case CREATE_PARENT_LOCATION:
      return {...state, success:true, res: action.payload}
    default:
      return state;
  }
};
export const editParentLocationReducer = (state = {success:false}, action: any) => {
  switch (action.type) {
    case EDIT_PARENT_LOCATION_REQ :
      return {...state, success: false}
    case EDIT_PARENT_LOCATION:
      return {...state, success:true, res: action.payload}
    default:
      return state;
  }
};
export const deleteParentLocationReducer = (state = {success:false}, action: any) => {
  switch (action.type) {
    case DELETE_PARENT_LOCATION_REQ :
      return {...state, success: false}
    case DELETE_PARENT_LOCATION:
      return {...state, success:true, res: action.payload}
    default:
      return state;
  }
};
