import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const Title = props => {
  return (
    <View style={{ ...styles.wrap, ...props.styleWrap }}>
      <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    </View>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  styleWrap: PropTypes.object
};

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 20
  },
  text: {
    fontFamily: "GothamPro-Bold",
    color: Colors.main_text,
    fontSize: 35
  }
});

export default Title;
