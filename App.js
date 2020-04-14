import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import movieReducer from "./store/reducers/movie";
import { composeWithDevTools } from "redux-devtools-extension";
import NavigationContainer from "./navigation/NavigationContainer";
import { AuthProvider } from "./services/context/auth-context";

const rootReducer = combineReducers({
  movie: movieReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    </AuthProvider>
  );
}
