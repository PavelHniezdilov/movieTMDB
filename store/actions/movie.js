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

export const fetchMovieImages = id => {
  return async dispatch => {
    try {
      const resData = await Api.getMovieImages(id);

      dispatch({ type: types.SET_MOVIE_IMAGES, imgs: resData });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchMovieReviews = id => {
  return async dispatch => {
    try {
      const resData = await Api.getMovieReviews(id);

      dispatch({ type: types.SET_MOVIE_REVIEWS, reviews: resData });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchSearchList = (text, page) => {
  return async dispatch => {
    try {
      const resData = await Api.getSearchList(text, page);

      dispatch({ type: types.SET_SEARCH_LIST, search: resData });
    } catch (err) {
      throw err;
    }
  };
};
