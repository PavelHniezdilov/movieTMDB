import * as types from "../../constants/actionTypes";

const initialState = {
  previewList: [],
  moviesList: [],
  movieDetails: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PREVIEW_LIST:
      const rolePreview = action.role;
      const dataPreview = action.preview.results.slice(0, 5).map(item => {
        return {
          id: item.id,
          title: item.title,
          vote: item.vote_average.toFixed(1),
          img: item.poster_path,
          year: item.release_date.slice(0, 4)
        };
      });

      return {
        ...state,
        previewList: {
          ...state.previewList,
          [rolePreview]: dataPreview
        }
      };

    case types.SET_MOVIES_LIST:
      const dataMovies = action.movies.results.map(item => {
        return {
          id: item.id,
          title: item.title,
          img: item.poster_path
        };
      });

      return {
        ...state,
        moviesList: dataMovies
      };

    case types.SET_MOVIE_DETAILS:
      const details = action.details;

      return {
        ...state,
        movieDetails: details
      };
  }
  return state;
};
