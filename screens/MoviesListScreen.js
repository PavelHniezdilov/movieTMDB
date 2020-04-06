import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/smart/Header";
import TextCommon from "../components/ui/TextCommon";
import MainWrap from "../components/ui/MainWrap";
import ContentWrap from "../components/ui/ContentWrap";

const MoviesListScreen = props => {
  return (
    <MainWrap>
      <View style={styles.wrap}>
        <Header backBtn />
        <ContentWrap>
          <TextCommon style={styles.text}>movie list screen</TextCommon>
        </ContentWrap>
      </View>
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  wrap: {}
});

export default MoviesListScreen;
