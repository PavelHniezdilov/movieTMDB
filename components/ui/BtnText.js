import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const BtnText = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.wrap, ...props.styleWrap }}>
      <TouchableCmp onPress={props.onPress}>
        <View>
          <Text style={{ ...styles.text, ...props.style }}>
            {props.children}
          </Text>
        </View>
      </TouchableCmp>
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
    fontSize: 20,
    fontFamily: "GothamPro",
    color: Colors.main_text
  }
});

export default BtnText;
