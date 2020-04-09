import React from "react";
import { StyleSheet } from "react-native";
import MainWrap from "../components/ui/MainWrap";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import CarouselList from "../components/smart/CarouselList";
import NavBar from "../components/smart/NavBar";

const AppScreen = props => {
  return (
    <MainWrap>
      <Header />
      <ContentWrap scrollView style={styles.content}>
        <CarouselList title="Top rated" role="top_rated" />
        <CarouselList title="Popular" role="popular" />
        <CarouselList title="Now Playing" role="now_playing" />
      </ContentWrap>
      <NavBar />
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingRight: 0
  }
});

export default AppScreen;
