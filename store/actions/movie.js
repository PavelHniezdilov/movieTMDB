import * as Api from "../../services/api/api";
import * as types from "../../constants/actionTypes";

export const fetchSearchMovie = name => {
  return async dispatch => {
    try {
      const resData = await Api.getSearchMovie(name);

      dispatch({ type: types.SET_SEARCH_MOVIES, movies: resData });
    } catch (err) {
      throw err;
    }
  };
};
