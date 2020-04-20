import * as types from "../../constants/actionTypes";
import Config from "react-native-config";

const initialState = {
  previewList: [],
  moviesList: [],
  movieDetails: {},
  movieImages: [],
  movieReviews: []
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
          img: `${Config.MOVIE_IMG_BASE_URL}/w154${item.poster_path}`,
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
          img: `${Config.MOVIE_IMG_BASE_URL}/w500${item.poster_path}`
        };
      });

      return {
        ...state,
        moviesList: dataMovies
      };

    case types.SET_SEARCH_LIST:
      const dataSearch = action.search.results.map(item => {
        return {
          id: item.id,
          title: item.title,
          img: `${Config.MOVIE_IMG_BASE_URL}/w500${item.poster_path}`
        };
      });

      return {
        ...state,
        moviesList: dataSearch
      };

    case types.SET_MOVIE_DETAILS:
      const details = action.details;

      return {
        ...state,
        movieDetails: details
      };

    case types.SET_MOVIE_IMAGES:
      let images = [];
      action.imgs.backdrops.map(item => {
        images.push({
          source: {
            uri: Config.MOVIE_IMG_BASE_URL + "/w500" + item.file_path
          }
        });
      });

      return {
        ...state,
        movieImages: images
      };
    case types.SET_MOVIE_REVIEWS:
      const reviews = action.reviews.results.map(item => {
        return {
          author: item.author,
          text: item.content.slice(0, 200),
          url: item.url
        };
      });

      return {
        ...state,
        movieReviews: reviews
      };
  }
  return state;
};
