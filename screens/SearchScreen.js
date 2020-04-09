import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import TextCommon from "../components/ui/TextCommon";
import NavBar from "../components/smart/NavBar";
import MainWrap from "../components/ui/MainWrap";

const SearchScreen = props => {
  return (
    <MainWrap>
      <Header backBtn />
      <ContentWrap>
        <TextCommon style={styles.text}>search screen</TextCommon>
      </ContentWrap>
      <NavBar />
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  wrap: {}
});

export default SearchScreen;
