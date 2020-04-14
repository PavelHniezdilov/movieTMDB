import React, {useContext, useEffect} from 'react';
import { StyleSheet } from "react-native";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import TextCommon from "../components/ui/TextCommon";
import NavBar from "../components/smart/NavBar";
import MainWrap from "../components/ui/MainWrap";
import { AuthContext } from "../services/context/auth-context";
import BtnText from "../components/ui/BtnText";

const FavouritesScreen = props => {
  const ctx = useContext(AuthContext);
  const { user, signOut } = ctx;

  useEffect(() => {
    if (!user) {
      props.navigation.navigate("Auth");
    }
  }, [...Object.values(ctx)]);

  return (
    <MainWrap>
      <Header backBtn />
      <ContentWrap>
        <TextCommon style={styles.text}>fav screen</TextCommon>
        <BtnText onPress={signOut}>signOut</BtnText>
      </ContentWrap>
      <NavBar />
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  wrap: {}
});

export default FavouritesScreen;
