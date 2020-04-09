import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import PropTypes from "prop-types";
import TextCommon from "../ui/TextCommon";
import Config from "react-native-config";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Colors from "../../constants/Colors";

const MovieListItem = props => {
  const { onPress, title, img } = props;

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.wrap, ...props.style }}>
      <TouchableCmp onPress={onPress}>
        <View>
          <ImageBackground
            source={{ uri: `${Config.MOVIE_IMG_BASE_URL}/w500${img}` }}
            style={styles.image}
          >
            <View style={styles.content}>
              <Icon name="control-play" size={20} color={Colors.main_text} />
              <TextCommon bold style={styles.text}>
                {title}
              </TextCommon>
            </View>
          </ImageBackground>
        </View>
      </TouchableCmp>
    </View>
  );
};

MovieListItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  img: PropTypes.string,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  wrap: {},
  image: {
    resizeMode: "cover"
  },
  content: {
    padding: 30,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .5)"
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 16,
    marginTop: 10
  }
});

export default MovieListItem;
