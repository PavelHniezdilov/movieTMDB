import React from "react";
import { StyleSheet } from "react-native";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import NavBar from "../components/smart/NavBar";
import MainWrap from "../components/ui/MainWrap";
import Details from "../components/smart/Details";

const MovieDetailsScreen = props => {
  const id = props.navigation.getParam("id");

  return (
    <MainWrap>
      <Header backBtn />
      <ContentWrap scrollView style={styles.content}>
        <Details id={id} />
      </ContentWrap>
      <NavBar />
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 0
  }
});

export default MovieDetailsScreen;
