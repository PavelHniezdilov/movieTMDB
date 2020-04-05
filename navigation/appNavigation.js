import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/SearchScreen";
import AuthScreen from "../screens/AuthScreen";
import AppScreen from "../screens/AppScreen";
import MoviesListScreen from "../screens/MoviesListScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const AppStack = createStackNavigator(
  {
    App: AppScreen,
    MoviesList: MoviesListScreen,
    MovieDetails: MovieDetailsScreen,
    Search: SearchScreen,
    Favourites: FavouritesScreen
  },
  {
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    headerMode: "none"
  }
);

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
});

export default createAppContainer(AppNavigator);
