import {  LOAD_USER_SUCCESS,LOGIN_USER_SUCCESS , SIGNUP_USER_SUCCESS } from "../consts/userConst";

interface dataType{
  details: object,
}
const initialState: dataType = {
  details: {}
}
export const signUpReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case SIGNUP_USER_SUCCESS:
        return {
          details: action.payload
        };
  
      default:
        return state;
    }
  };

export const loginReducer = (state=initialState, action:any) => {
    switch (action.type) {
      case LOGIN_USER_SUCCESS:
        return {
          details:action.payload
        };
      default:
        return state;
    }
  };
export const loadReducer = (state = {}, action:any) => {
    switch (action.type) {
      case LOAD_USER_SUCCESS:
        return {
          details:action.payload
        };
      default:
        return state;
    }
  };