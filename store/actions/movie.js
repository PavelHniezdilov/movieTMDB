import * as Api from "../../services/api/api";
import * as types from "../../constants/actionTypes";

export const fetchListPreview = role => {
  return async dispatch => {
    try {
      const resData = await Api.getListPreview(role);

      dispatch({ type: types.SET_LIST_PREVIEW, preview: resData, role });
    } catch (err) {
      throw err;
    }
  };
};
