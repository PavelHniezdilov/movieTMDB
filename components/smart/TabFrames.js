import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import TextCommon from "../ui/TextCommon";
import { useSelector } from "react-redux";

const TabFrames = props => {
  const data = useSelector(state => state.movie.movieDetails);
  console.log(data);

  return (
    <View style={styles.wrap}>
      <TextCommon>TabFrames</TextCommon>
    </View>
  );
};

TabFrames.propTypes = {};

const styles = StyleSheet.create({
  wrap: {}
});

export default React.memo(TabFrames);
