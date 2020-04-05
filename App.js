import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import movieReducer from "./store/reducers/movie";
import { composeWithDevTools } from "redux-devtools-extension";
import AppNavigator from "./navigation/appNavigation";
import NavigationContainer from "./navigation/NavigationContainer";

const rootReducer = combineReducers({
  movie: movieReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
