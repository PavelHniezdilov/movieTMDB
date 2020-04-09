import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Colors from "../../constants/Colors";
import TextCommon from "../ui/TextCommon";
import TabDetails from "./TabDetails";
import TabOverview from "./TabOverview";
import TabFrames from "./TabFrames";
import TabReviews from "./TabReviews";

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.navIndicator}
    style={styles.navBox}
    renderLabel={({ route, focused }) => (
      <TextCommon style={styles.navBoxText}>{route.title}</TextCommon>
    )}
  />
);

const initialLayout = { width: Dimensions.get("window").width };

const DetailsTab = props => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
    return () => {
      setIsMount(false);
    };
  }, []);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "details", title: "Details" },
    { key: "overview", title: "Overview" },
    { key: "frames", title: "Frames" },
    { key: "review", title: "Reviews" }
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "details":
        return <TabDetails />;
      case "overview":
        return <TabOverview />;
      case "frames":
        return <TabFrames />;
      case "review":
        return <TabReviews />;
      default:
        return null;
    }
  };

  if (!isMount) {
    return null;
  }

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

DetailsTab.propTypes = {};

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  navIndicator: {
    backgroundColor: Colors.btn_fill,
    height: 2
  },
  navBox: {
    backgroundColor: Colors.tab_fill
  },
  navBoxText: {
    fontSize: 14
  }
});

export default DetailsTab;
