import React from "react";
import { StyleSheet } from "react-native";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import TextCommon from "../components/ui/TextCommon";
import NavBar from "../components/smart/NavBar";
import MainWrap from "../components/ui/MainWrap";

const MovieDetailsScreen = props => {
  const id = props.navigation.getParam("id");
  console.log(id);

  return (
    <MainWrap>
      <Header backBtn />
      <ContentWrap>
        <TextCommon style={styles.text}>movie detail screen</TextCommon>
      </ContentWrap>
      <NavBar />
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  wrap: {}
});

export default MovieDetailsScreen;
