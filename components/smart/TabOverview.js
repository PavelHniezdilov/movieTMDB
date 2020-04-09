import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import TextCommon from "../ui/TextCommon";
import { useSelector } from "react-redux";

const TabOverview = props => {
  const data = useSelector(state => state.movie.movieDetails);

  return (
    <View style={styles.content}>
      {data.tagline.length !==
      (
        <View style={styles.titleBox}>
          <TextCommon bold style={styles.quote}>
            "{data.tagline}"
          </TextCommon>
        </View>
      )}

      <TextCommon style={styles.text}>{data.overview}</TextCommon>
    </View>
  );
};

TabOverview.propTypes = {};

const styles = StyleSheet.create({
  content: {
    padding: 20
  },
  quote: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 20
  },
  titleBox: {
    marginBottom: 15
  },
  text: {
    fontSize: 16,
    lineHeight: 26
  }
});

export default React.memo(TabOverview);
