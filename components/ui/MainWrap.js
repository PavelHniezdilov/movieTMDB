import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

const MainWrap = props => {
  return (
    <View style={styles.wrap}>
      <SafeAreaView style={styles.content}>{props.children}</SafeAreaView>
    </View>
  );
};

MainWrap.propTypes = {
  children: PropTypes.node
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Colors.main_fill,
    flex: 1
  },
  content: {
    flex: 1
  }
});

export default MainWrap;
