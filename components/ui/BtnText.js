import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const BtnText = props => {
  return (
    <View style={{ ...styles.wrap, ...props.styleWrap }}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.content}>
          <Text style={{ ...styles.text, ...props.style }}>
            {props.children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

BtnText.propTypes = {
  children: PropTypes.node,
  styleWrap: PropTypes.object,
  style: PropTypes.object,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: "flex-start"
  },
  text: {
    fontFamily: "GothamPro",
    color: Colors.main_text
  },
  content: {
    padding: 3
  }
});

export default BtnText;
