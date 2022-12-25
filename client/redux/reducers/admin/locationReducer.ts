import { CREATE_LOCATION } from "../../consts/admin/locationConst";

interface dataType{
    res: object,
  }
  const initialState: dataType = {
    res: {}
  }

export const createLocationReducer = (state = initialState, action:any) => {
    if(action.type === CREATE_LOCATION){
        return {res: action.payload.data}
    }else{
        return state;
    }

  };
