import React from "react";
import { StyleSheet } from "react-native";
import Header from "../components/smart/Header";
import MainWrap from "../components/ui/MainWrap";
import ContentWrap from "../components/ui/ContentWrap";
import NavBar from "../components/smart/NavBar";
import Title from "../components/ui/Title";
import MoviesList from "../components/smart/MoviesList";

const MoviesListScreen = props => {
  const role = props.navigation.getParam("role");
  const title = props.navigation.getParam("title");
  const query = props.navigation.getParam("query");

  return (
    <MainWrap>
      <Header backBtn />
      <ContentWrap style={styles.content}>
        <Title styleWrap={styles.title}>{title}</Title>
        <MoviesList role={role} query={query} />
      </ContentWrap>
      <NavBar />
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 0
  },
  title: {
    paddingLeft: 20
  }
});

export default MoviesListScreen;
