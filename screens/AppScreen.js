import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AppScreen = props => {
  return (
    <View style={styles.wrap}>
      <Text>AppScreen</Text>
      <Button
        title={"Go to list"}
        onPress={() => {
          props.navigation.navigate("MoviesList");
        }}
      />
      <Icon name="rocket" size={30} color="#900" />
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

export default AppScreen;
