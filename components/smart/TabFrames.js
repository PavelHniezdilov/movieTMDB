import React, { useContext, useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";
import PropTypes from "prop-types";
import TextCommon from "../ui/TextCommon";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContext } from "react-navigation";
import * as movieActions from "../../store/actions/movie";
import Colors from "../../constants/Colors";
import ImageView from "react-native-image-view";

const TabFrames = props => {
  const navigation = useContext(NavigationContext);
  const id = navigation.getParam("id");

  const [imageIndex, setImageIndex] = useState(0);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const data = useSelector(state => state.movie.movieImages);

  const dispatch = useDispatch();
  const loadCurrentData = useCallback(async () => {
    setError(null);
    try {
      await dispatch(movieActions.fetchMovieImages(id));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(true);
    loadCurrentData().then(() => {
      setIsLoading(false);
    });
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

  const renderFooter = () => {
    return <View />;
  };

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View
      style={styles.wrap}
      onLayout={e => props.onLayout(e.nativeEvent.layout.height)}
    >
      <View style={styles.grid}>
        {data.map((image, idx) => (
          <View style={styles.col} key={idx}>
            <TouchableCmp
              onPress={() => {
                setImageIndex(idx);
                setIsImageViewVisible(true);
              }}
            >
              <Image
                style={styles.img}
                source={image.source}
                resizeMode="cover"
              />
            </TouchableCmp>
          </View>
        ))}
      </View>
      <ImageView
        glideAlways
        images={data}
        imageIndex={imageIndex}
        animationType="fade"
        isVisible={isImageViewVisible}
        renderFooter={renderFooter}
        onClose={() => setIsImageViewVisible(false)}
        onImageChange={index => {}}
      />
    </View>
  );
};

TabFrames.propTypes = {
  onLayout: PropTypes.func
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 150
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  col: {
    width: "33.33%"
  }
});

export default React.memo(TabFrames);
