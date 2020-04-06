import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const TextCommon = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

TextCommon.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "GothamPro",
    color: Colors.main_text
  }
});

export default TextCommon;
