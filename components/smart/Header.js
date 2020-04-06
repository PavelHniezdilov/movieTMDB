import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Colors from "../../constants/Colors";
import { NavigationContext } from "react-navigation";

const Header = props => {
  const navigation = useContext(NavigationContext);

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const backHandler = () => {
    navigation.goBack();
  };

  const menuHandler = () => {
    console.log("menuHandler");
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.left}>
        {props.backBtn && (
          <TouchableCmp onPress={backHandler}>
            <Icon name="arrow-left" size={30} color={Colors.header_btn} />
          </TouchableCmp>
        )}
      </View>
      <View style={styles.center}>
        <Image source={require("../../assets/imgs/logo.png")} />
      </View>
      <View style={styles.right}>
        <TouchableCmp onPress={menuHandler}>
          <Icon name="menu" size={30} color={Colors.header_btn} />
        </TouchableCmp>
      </View>
    </View>
  );
};

Header.propTypes = {
  backBtn: PropTypes.bool
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 30,
    marginBottom: 10
  },
  left: {
    width: 50
  },
  right: {
    width: 50,
    alignItems: "flex-end"
  }
});

export default Header;
