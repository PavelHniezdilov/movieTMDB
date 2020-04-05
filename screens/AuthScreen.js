import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AuthScreen = props => {
  return (
    <View style={styles.wrap}>
      <Text>AuthScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AuthScreen;
