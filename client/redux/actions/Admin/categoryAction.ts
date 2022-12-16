import axios from "axios";
import { GET_PARENT_CATEGORY } from "../../consts/admin/categoryConst";
import { toast } from "react-toastify";

export const getParentCategories = () => async (dispatch: any) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/api/admin/allparentcat`,
        config
      );
      dispatch({ type: GET_PARENT_CATEGORY, payload: data });
    } catch (error: any) {
    }
  };