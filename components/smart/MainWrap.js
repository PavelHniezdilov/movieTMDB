import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const MainWrap = props => {
  return (
    <View style={styles.wrap}>
      <Text>MainWrap</Text>
    </View>
  );
};

MainWrap.propTypes = {};

const styles = StyleSheet.create({
  wrap: {}
});

export default Test;
