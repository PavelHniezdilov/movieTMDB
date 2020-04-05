import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./appNavigation";
import { NavigationActions } from "react-navigation";

const NavigationContainer = props => {
  const navRef = useRef();

  useEffect(() => {
    navRef.current.dispatch(NavigationActions.navigate({ routeName: "App" }));
  }, []);

  return <AppNavigator ref={navRef} />;
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default NavigationContainer;
