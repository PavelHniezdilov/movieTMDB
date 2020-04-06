import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Button, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import Title from "../ui/Title";
import BtnText from "../ui/BtnText";
import * as movieActions from "../../store/actions/movie";
import TextCommon from "../ui/TextCommon";
import Colors from "../../constants/Colors";
import { useApi } from "../../services/hooks/apiHook";

const CarouselList = props => {
  const role = props.role;

  const { data, isLoading, error, loadCurrentData, restart } = useApi(
    useSelector(state => state.movie.listPreview[role]),
    movieActions.fetchListPreview(role)
  );

  return (
    <View style={{ ...styles.wrap, ...props.styleWrap }}>
      <Title>{props.title}</Title>

      {error && (
        <View>
          <TextCommon>An error occurred!</TextCommon>
          <Button title="Try again" onPress={loadCurrentData} />
        </View>
      )}

      {isLoading && <ActivityIndicator size="large" color={Colors.spinner} />}

      {data && <TextCommon>Data</TextCommon>}

      <BtnText onPress={restart} styleWrap={styles.link}>
        See more
      </BtnText>
    </View>
  );
};

CarouselList.propTypes = {
  title: PropTypes.string,
  role: PropTypes.string,
  styleWrap: PropTypes.object
};

const styles = StyleSheet.create({
  wrap: {},
  link: {
    marginTop: 20,
    alignItems: "flex-end"
  }
});

export default CarouselList;
