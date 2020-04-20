import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const Btn = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.wrap, ...props.styleWrap }}>
      <TouchableCmp onPress={props.onPress}>
        <View style={{ ...styles.content, ...props.style }}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

Btn.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  styleWrap: PropTypes.object,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center"
  },
  content: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 30,
    minWidth: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.btn_fill,
    borderRadius: 30
  },
  text: {
    color: Colors.btn_text,
    fontSize: 18,
    fontFamily: "GothamPro-Bold"
  }
});

export default Btn;
