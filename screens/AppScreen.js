import React from "react";
import { StyleSheet } from "react-native";
import MainWrap from "../components/ui/MainWrap";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import CarouselList from "../components/smart/CarouselList";

const AppScreen = props => {
  return (
    <MainWrap>
      <Header />
      <ContentWrap>
        <CarouselList title="Top rated" role="top_rated" />
        <CarouselList title="Popular" role="popular" styleWrap={styles.gap} />
        <CarouselList
          title="Now Playing"
          role="now_playing"
          styleWrap={styles.gap}
        />
      </ContentWrap>
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  gap: {
    marginTop: 30
  }
});

export default AppScreen;
