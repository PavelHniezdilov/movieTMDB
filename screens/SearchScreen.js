import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import NavBar from "../components/smart/NavBar";
import MainWrap from "../components/ui/MainWrap";
import Title from "../components/ui/Title";
import SearchForm from "../components/smart/SearchForm";

const SearchScreen = props => {
  return (
    <MainWrap>
      <Header backBtn />
      <ContentWrap>
        <View style={styles.content}>
          <SearchForm />
        </View>
      </ContentWrap>
      <NavBar />
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default SearchScreen;
