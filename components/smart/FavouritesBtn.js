import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import BtnText from "../ui/BtnText";
import { FavouriteContext } from "../../services/context/favourite-context";
import { NavigationContext } from "react-navigation";
import { AuthContext } from "../../services/context/auth-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

const FavouritesBtn = props => {
  const navigation = useContext(NavigationContext);

  const { user } = useContext(AuthContext);
  const { id, title } = props;
  const { data, dataInit, addFavourite, deleteFavourite } = useContext(
    FavouriteContext
  );
  const [isExist, setIsExist] = useState(false);

  useEffect(() => {
    if (user) {
      dataInit(user);
    }
  }, [user]);

  useEffect(() => {
    if (user && data.length) {
      const exist = data.findIndex(elem => elem.id === id);
      if (exist !== -1) {
        setIsExist(true);
      } else {
        setIsExist(false);
      }
    } else {
      setIsExist(false);
    }
  }, [data, user, id]);

  const favouriteHandler = () => {
    if (user && !isExist) {
      addFavourite(id, title);
    } else if (user && isExist) {
      deleteFavourite(id);
    } else {
      navigation.navigate("Auth");
    }
  };

  return (
    <View style={{ ...props.styleWrap }}>
      <BtnText style={{ ...props.style }} onPress={favouriteHandler}>
        <Icon
          name={isExist ? "star" : "star-o"}
          size={20}
          color={Colors.main_text}
        />
      </BtnText>
    </View>
  );
};

FavouritesBtn.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  styleWrap: PropTypes.object
};

const styles = StyleSheet.create({
  wrap: {}
});

export default FavouritesBtn;
