import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const TextCommon = props => {
  let fontWeight = props.bold
    ? { fontFamily: "GothamPro-Bold" }
    : { fontFamily: "GothamPro" };

  return (
    <Text style={{ ...fontWeight, ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
};

TextCommon.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  bold: PropTypes.bool
};

const styles = StyleSheet.create({
  text: {
    color: Colors.main_text
  }
});

export default TextCommon;
