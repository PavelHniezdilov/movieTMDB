import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import PropTypes from "prop-types";
import { TabView, TabBar } from "react-native-tab-view";
import Colors from "../../constants/Colors";
import TextCommon from "../ui/TextCommon";
import TabDetails from "./TabDetails";
import TabOverview from "./TabOverview";
import TabFrames from "./TabFrames";
import TabReviews from "./TabReviews";

const initialLayout = { width: Dimensions.get("window").width };

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

const DetailsTab = props => {
  const navHeight = 48;

  const [index, setIndex] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(null);
  const [tabsHeight, setTabsHeight] = useState([]);
  const [routes] = useState([
    { key: "details", title: "Details" },
    { key: "overview", title: "Overview" },
    { key: "frames", title: "Frames" },
    { key: "review", title: "Reviews" }
  ]);

  const setTabHeight = (height, key) => {
    const idx = routes.findIndex(item => item.key === key);
    setTabsHeight(prevState => [...prevState, { [idx]: height }]);
  };

  const initTabHeight = (height, key) => {
    setTabHeight(height, key);
    setCurrentHeight(height + navHeight);
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "details":
        return <TabDetails onLayout={e => initTabHeight(e, route.key)} />;
      case "overview":
        return <TabOverview onLayout={e => setTabHeight(e, route.key)} />;
      case "frames":
        return <TabFrames onLayout={e => setTabHeight(e, route.key)} />;
      case "review":
        return <TabReviews onLayout={e => setTabHeight(e, route.key)} />;
      default:
        return null;
    }
  };

  const onChangeTab = idx => {
    setIndex(idx);
    const height = tabsHeight.find(element => element[idx]);
    setCurrentHeight(height[idx] + navHeight);
  };

  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);

    return () => {
      setIsMount(false);
    };
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <View>
      <TabView
        style={{ height: currentHeight }}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={idx => onChangeTab(idx)}
        initialLayout={initialLayout}
      />
    </View>
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
