import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Test = props => {
  return (
    <View style={styles.wrap}>
      <Text>Test</Text>
    </View>
  );
};

Test.propTypes = {};

const styles = StyleSheet.create({
  wrap: {}
});

export default Test;
