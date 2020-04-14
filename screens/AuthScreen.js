import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import ContentWrap from "../components/ui/ContentWrap";
import MainWrap from "../components/ui/MainWrap";
import { AuthContext } from "../services/context/auth-context";
import Auth from "../components/smart/Auth";

const AuthScreen = props => {
  const ctx = useContext(AuthContext);
  const { user } = ctx;

  useEffect(() => {
    if (user) {
      props.navigation.navigate("Favourites");
    }
  }, [...Object.values(ctx)]);

  return (
    <MainWrap>
      <ContentWrap style={styles.content}>
        <Auth />
      </ContentWrap>
    </MainWrap>
  );
};

const styles = StyleSheet.create({

});

export default AuthScreen;
