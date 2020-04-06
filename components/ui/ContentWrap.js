import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const ContentWrap = props => {
  return (
    <View style={{ ...styles.wrap, ...props.style }}>{props.children}</View>
  );
};

ContentWrap.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 20
  }
});

export default ContentWrap;
