import React from "react";
import { StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MainWrap from "../components/ui/MainWrap";
import TextCommon from "../components/ui/TextCommon";
import Header from "../components/smart/Header";
import ContentWrap from "../components/ui/ContentWrap";
import Title from "../components/ui/Title";

const AppScreen = props => {
  return (
    <MainWrap>
      <Header />
      <ContentWrap>
        <Title>Top rated</Title>
        <TextCommon style={styles.text}>test text</TextCommon>
        <Button
          title={"Go to list"}
          onPress={() => {
            props.navigation.navigate("MoviesList");
          }}
        />
        <Icon name="rocket" size={30} color="#900" />
      </ContentWrap>
    </MainWrap>
  );
};

const styles = StyleSheet.create({
  wrap: {},
  text: {
    fontSize: 20
  }
});

export default AppScreen;
