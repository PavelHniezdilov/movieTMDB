import React, { useContext, useEffect, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import * as movieActions from "../../store/actions/movie";
import { NavigationContext } from "react-navigation";
import TextCommon from "../ui/TextCommon";
import Colors from "../../constants/Colors";
import MovieListItem from "../dump/MovieListItem";
import Pagination from "../dump/Pagination";

const MoviesList = props => {
  const { role, query } = props;
  const navigation = useContext(NavigationContext);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [role]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const data = useSelector(state => state.movie.moviesList);

  const dispatch = useDispatch();
  const loadCurrentData = useCallback(async () => {
    let getData;
    if (role === "search") {
      getData = dispatch(movieActions.fetchSearchList(query, currentPage));
    } else {
      getData = dispatch(movieActions.fetchMoviesList(role, currentPage));
    }

    setError(null);
    try {
      await getData;
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, role, currentPage]);

  useEffect(() => {
    setIsLoading(true);
    loadCurrentData().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCurrentData, role]);

  const onPressHandler = id => {
    navigation.navigate("MovieDetails", { id });
  };

  if (error) {
    return (
      <View>
        <TextCommon>An error occurred!</TextCommon>
        <Button title="Try again" onPress={loadCurrentData} />
      </View>
    );
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.spinner} />;
  }

  if (data.length === 0) {
    return <TextCommon>No data</TextCommon>;
  }

  const onStartHandler = () => {
    setCurrentPage(1);
  };

  const onNextHandler = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const onPrevHandler = () => {
    setCurrentPage(prevState => prevState - 1);
  };

  const moviesGrid = data.map((item, idx) => {
    return (
      <MovieListItem
        key={idx}
        style={idx % 3 ? styles.col : styles.colWide}
        img={item.img}
        onPress={() => {
          onPressHandler(item.id);
        }}
        title={item.title}
      />
    );
  });

  return (
    <View style={styles.wrap}>
      <ScrollView>
        <View style={styles.grid}>{moviesGrid}</View>
        <Pagination
          page={currentPage}
          onStart={onStartHandler}
          onPrev={onPrevHandler}
          onNext={onNextHandler}
        />
      </ScrollView>
    </View>
  );
};

MoviesList.propTypes = {
  role: PropTypes.string.isRequired,
  query: PropTypes.string
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  col: {
    width: "50%"
  },
  colWide: {
    width: "100%"
  }
});

export default MoviesList;
