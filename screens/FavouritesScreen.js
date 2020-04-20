import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import NavBar from "../components/smart/NavBar";
import MainWrap from "../components/ui/MainWrap";
import Favourites from "../components/smart/Favourites";
import Title from "../components/ui/Title";
import { AuthContext } from "../services/context/auth-context";

const FavouritesScreen = props => {
  const ctx = useContext(AuthContext);
  const { user } = ctx;

  useEffect(() => {
    if (!user) {
      props.navigation.navigate("Auth");
    }
  }, [...Object.values(ctx)]);

  return (
    <MainWrap>
      <Header backBtn />
      <ContentWrap>
        <Title>Favourites</Title>
        <Favourites />
      </ContentWrap>
      <NavBar />
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  wrap: {}
});

export default FavouritesScreen;
