import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import * as movieActions from "../../store/actions/movie";
import TextCommon from "../ui/TextCommon";
import Colors from "../../constants/Colors";
import Config from "react-native-config";
import DetailsTab from "./DetailsTab";

const Details = props => {
  const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const data = useSelector(state => state.movie.movieDetails);

  const dispatch = useDispatch();
  const loadCurrentData = useCallback(async () => {
    setError(null);
    try {
      await dispatch(movieActions.fetchMovieDetails(id));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, id]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setIsLoading(true);
      loadCurrentData().then(() => {
        setIsLoading(false);
      });
    }

    return () => (isSubscribed = false);
  }, [loadCurrentData]);

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

  if (Object.keys(data).length === 0) {
    return <TextCommon>No data</TextCommon>;
  }

  return (
    <View style={styles.wrap}>
      <ImageBackground
        source={{
          uri: `${Config.MOVIE_IMG_BASE_URL}/w500${data.backdrop_path}`
        }}
        style={styles.image}
      >
        <View style={styles.titleBox}>
          <TextCommon bold style={styles.title}>
            {data.title}
          </TextCommon>
        </View>
      </ImageBackground>
      <DetailsTab />
    </View>
  );
};

Details.propTypes = {
  id: PropTypes.number
};

const styles = StyleSheet.create({
  wrap: {},
  image: {
    height: 200,
    resizeMode: "cover"
  },
  titleBox: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .5)",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  title: {
    fontSize: 16,
    lineHeight: 20
  }
});

export default Details;
