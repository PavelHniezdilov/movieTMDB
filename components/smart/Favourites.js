import React, { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { AuthContext } from "../../services/context/auth-context";
import { FavouriteContext } from "../../services/context/favourite-context";
import TextCommon from "../ui/TextCommon";
import BtnText from "../ui/BtnText";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationContext } from "react-navigation";

const Favourites = props => {
  const navigation = useContext(NavigationContext);
  const { user } = useContext(AuthContext);

  const { data, dataInit, deleteFavourite } = useContext(FavouriteContext);

  useEffect(() => {
    if (user) {
      dataInit(user);
    }
  }, [user]);

  const titleHandler = id => {
    navigation.navigate("MovieDetails", { id });
  };

  if (data.length === 0) {
    return <TextCommon>No data. Add favourites movies.</TextCommon>;
  }

  const content = data.map((item, idx) => {
    return (
      <View style={styles.item} key={idx}>
        <View style={styles.itemLeft}>
          <BtnText onPress={() => titleHandler(item.id)}>{item.title}</BtnText>
        </View>
        <BtnText onPress={() => deleteFavourite(item.id)}>
          <Icon name="delete" size={15} color={Colors.header_btn} />
        </BtnText>
      </View>
    );
  });

  return <ScrollView style={styles.wrap}>{content}</ScrollView>;
};

Favourites.propTypes = {};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: Colors.header_btn
  },
  itemLeft: {
    marginRight: 20,
    flex: 1
  }
});

export default Favourites;
