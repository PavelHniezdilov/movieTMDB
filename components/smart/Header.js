import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Colors from "../../constants/Colors";
import { NavigationContext } from "react-navigation";

const Header = props => {
  const navigation = useContext(NavigationContext);

  const backHandler = () => {
    navigation.goBack();
  };

  const logoHandler = () => {
    navigation.navigate("App");
  };

  const menuHandler = () => {
    console.log("menuHandler");
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.left}>
        {props.backBtn && (
          <TouchableOpacity onPress={backHandler}>
            <Icon name="arrow-left" size={20} color={Colors.header_btn} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={logoHandler}>
          <Image
            style={styles.img}
            source={require("../../assets/imgs/logo.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={menuHandler}>
          <Icon name="menu" size={20} color={Colors.header_btn} />
        </TouchableOpacity>
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
    marginTop: 15,
    paddingHorizontal: 30,
    marginBottom: 20
  },
  left: {
    width: 50
  },
  right: {
    width: 50,
    alignItems: "flex-end"
  },
  img: {
    width: 110,
    height: 39
  }
});

export default Header;
