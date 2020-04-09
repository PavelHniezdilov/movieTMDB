import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import TextCommon from "../ui/TextCommon";

const TabReviews = props => {
  console.log('TabReviews');
  return (
    <View style={styles.wrap}>
      <TextCommon>TabReviews</TextCommon>
    </View>
  );
};

TabReviews.propTypes = {};

const styles = StyleSheet.create({
  wrap: {}
});

export default React.memo(TabReviews);
