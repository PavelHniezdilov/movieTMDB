import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Button, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import Title from "../ui/Title";
import BtnText from "../ui/BtnText";
import * as movieActions from "../../store/actions/movie";
import TextCommon from "../ui/TextCommon";
import Colors from "../../constants/Colors";
import CarouselPreview from "../dump/CarouselPreview";
import { NavigationContext } from "react-navigation";

const CarouselList = props => {
  const { role, title } = props;
  const navigation = useContext(NavigationContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const data = useSelector(state => state.movie.previewList[role]);

  const dispatch = useDispatch();
  const loadCurrentData = useCallback(async () => {
    setError(null);
    try {
      await dispatch(movieActions.fetchPreviewList(role));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, role]);

  useEffect(() => {
    setIsLoading(true);
    loadCurrentData().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCurrentData]);

  const onPressHandler = id => {
    navigation.navigate("MovieDetails", { id });
  };

  const onLinkHandler = () => {
    navigation.navigate("MoviesList", { role, title });
  };

  return (
    <View style={{ ...styles.wrap, ...props.styleWrap }}>
      <Title>{title}</Title>

      {error && (
        <View>
          <TextCommon>An error occurred!</TextCommon>
          <Button title="Try again" onPress={loadCurrentData} />
        </View>
      )}

      {isLoading && <ActivityIndicator size="large" color={Colors.spinner} />}

      {data && (
        <CarouselPreview
          onPress={id => {
            onPressHandler(id);
          }}
          data={data !== undefined ? data : []}
        />
      )}

      <BtnText
        onPress={onLinkHandler}
        styleWrap={styles.linkWrap}
        style={styles.link}
      >
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
  wrap: {
    marginBottom: 30
  },
  linkWrap: {
    marginTop: 15,
    marginRight: 20,
    alignItems: "flex-end"
  },
  link: {
    fontSize: 16
  }
});

export default CarouselList;
