import * as types from "../../constants/actionTypes";

const initialState = {
  searchMovie: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_MOVIES:
      const dataSearch = action.movies.Search.map(item => {
        return {
          name: item.Title,
          year: item.Year,
          id: item.imdbID,
          img: item.Poster
        };
      });

      return {
        ...state,
        searchMovie: dataSearch
      };
  }
  return state;
};
