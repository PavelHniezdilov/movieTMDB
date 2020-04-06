import * as types from "../../constants/actionTypes";

const initialState = {
  listPreview: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LIST_PREVIEW:
      const rolePreview = action.role;
      const dataPreview = action.preview.results.slice(0, 5).map(item => {
        return {
          id: item.id,
          title: item.title,
          vote: item.vote_average,
          img: item.poster_path
        };
      });

      return {
        ...state,
        listPreview: {
          ...state.listPreview,
          [rolePreview]: dataPreview
        }
      };
  }
  return state;
};
