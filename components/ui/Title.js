import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const Title = props => {
  return (
    <View style={styles.wrap}>
      <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    </View>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 10
  },
  text: {
    fontFamily: "GothamPro",
    color: Colors.main_text,
    fontSize: 35
  }
});

export default Title;
