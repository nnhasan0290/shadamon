import { LOAD_USER_FAIL, LOAD_USER_REQ, LOAD_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_REQ, LOGIN_USER_SUCCESS, SIGNUP_USER_FAIL, SIGNUP_USER_REQ, SIGNUP_USER_SUCCESS } from "../consts/userConst";

interface dataType{
  loading: boolean,
  msg: string,
  success: boolean,
  error: string,
}
const initialState: dataType = {
  loading: false,
  msg: "",
  success: false,
  error: ""
}
export const signUpReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case SIGNUP_USER_REQ:
        return {
          ...state,
          loading: true,
        };
      case SIGNUP_USER_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
        };
      case SIGNUP_USER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case "CLEAR_ERROR":
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

export const loginReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case LOGIN_USER_REQ:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_USER_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          msg: action.payload.message
        };
      case LOGIN_USER_FAIL:
        return {
          loading: false,
          error: action.payload.response.data.message,
        };
      case "CLEAR_ERROR":
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
export const loadReducer = (state = {}, action:any) => {
    switch (action.type) {
      case LOAD_USER_REQ:
        return {
          ...state,
          loading: true,
        };
      case LOAD_USER_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          msg: action.payload.message
        };
      case LOAD_USER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case "CLEAR_ERROR":
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };