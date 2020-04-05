import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <View style={styles.wrap}>
      <Text>Header</Text>
    </View>
  );
};

Header.propTypes = {};

const styles = StyleSheet.create({
  wrap: {}
});

export default Header;
