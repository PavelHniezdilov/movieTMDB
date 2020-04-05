import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Carousel = props => {
  return (
    <View style={styles.wrap}>
      <Text>Carousel</Text>
    </View>
  );
};

Carousel.propTypes = {};

const styles = StyleSheet.create({
  wrap: {}
});

export default Carousel;
