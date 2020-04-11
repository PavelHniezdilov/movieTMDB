import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Colors from "../../constants/Colors";
import TextCommon from "../ui/TextCommon";
import { NavigationContext } from "react-navigation";

const NavBar = props => {
  const navigation = useContext(NavigationContext);

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const data = [
    {
      text: "Top rated",
      icon: "star",
      goTo: "MoviesList",
      role: "top_rated"
    },
    {
      text: "Popular",
      icon: "trophy",
      goTo: "MoviesList",
      role: "popular"
    },
    {
      text: "Favourites",
      icon: "heart",
      goTo: "Favourites"
    },
    {
      text: "Search",
      icon: "magnifier",
      goTo: "Search"
    }
  ];

  const onPressHandler = (page, role, title) => {
    if (role) {
      navigation.navigate(page, { role, title });
    } else {
      navigation.navigate(page);
    }
  };

  const renderData = data.map((item, idx) => {
    return (
      <View key={idx} style={styles.col}>
        <TouchableCmp
          onPress={() => onPressHandler(item.goTo, item.role, item.text)}
        >
          <View style={styles.item}>
            <Icon name={item.icon} size={20} color={Colors.main_text} />
            <TextCommon style={styles.text}>{item.text}</TextCommon>
          </View>
        </TouchableCmp>
      </View>
    );
  });

  return <View style={styles.wrap}>{renderData}</View>;
};

NavBar.propTypes = {};

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.main_fill
  },
  col: {
    flex: 1
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center"
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    color: Colors.dop_text,
    textAlign: "center"
  }
});

export default NavBar;
