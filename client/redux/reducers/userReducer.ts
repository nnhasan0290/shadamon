import { LOGIN_USER_FAIL, LOGIN_USER_REQ, LOGIN_USER_SUCCESS, SIGNUP_USER_FAIL, SIGNUP_USER_REQ, SIGNUP_USER_SUCCESS } from "../consts/userConst";


export const signUpReducer = (state = {}, action:any) => {
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

export const loginReducer = (state = {}, action:any) => {
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
        };
      case LOGIN_USER_FAIL:
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