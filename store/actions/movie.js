import * as Api from "../../services/api/api";
import * as types from "../../constants/actionTypes";

export const fetchPreviewList = role => {
  return async dispatch => {
    try {
      const resData = await Api.getPreviewList(role);

      dispatch({ type: types.SET_PREVIEW_LIST, preview: resData, role });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchMoviesList = (role, page) => {
  return async dispatch => {
    try {
      const resData = await Api.getMoviesList(role, page);

      dispatch({ type: types.SET_MOVIES_LIST, movies: resData });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchMovieDetails = id => {
  return async dispatch => {
    try {
      const resData = await Api.getPreviewList(id);

      dispatch({ type: types.SET_MOVIE_DETAILS, details: resData });
    } catch (err) {
      throw err;
    }
  };
};
