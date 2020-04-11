import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  Linking,
  Alert
} from "react-native";
import PropTypes from "prop-types";
import TextCommon from "../ui/TextCommon";
import { useDispatch, useSelector } from "react-redux";
import * as movieActions from "../../store/actions/movie";
import { NavigationContext } from "react-navigation";
import Colors from "../../constants/Colors";
import BtnText from "../ui/BtnText";

const TabReviews = props => {
  const navigation = useContext(NavigationContext);
  const id = navigation.getParam("id");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const data = useSelector(state => state.movie.movieReviews);

  const dispatch = useDispatch();
  const loadCurrentData = useCallback(async () => {
    setError(null);
    try {
      await dispatch(movieActions.fetchMovieReviews(id));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(true);
    loadCurrentData().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCurrentData]);

  if (error) {
    return (
      <View>
        <TextCommon>An error occurred!</TextCommon>
        <Button title="Try again" onPress={loadCurrentData} />
      </View>
    );
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.spinner} />;
  }

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <BtnText onPress={handlePress}>{children}</BtnText>;
  };

  return (
    <View
      style={styles.content}
      onLayout={e => props.onLayout(e.nativeEvent.layout.height)}
    >
      {data.length !== 0 ? (
        data.map((item, idx) => {
          const textLength = 200;
          return (
            <View key={idx} style={styles.item}>
              <TextCommon bold style={styles.title}>
                {item.author}
              </TextCommon>
              <View style={styles.textBox}>
                <TextCommon style={styles.text}>
                  {item.text}
                  {item.text.length === textLength ? " ..." : ""}
                </TextCommon>
              </View>
              {item.text.length === textLength && (
                <View style={styles.btnBox}>
                  <OpenURLButton url={item.url}>Read more</OpenURLButton>
                </View>
              )}
            </View>
          );
        })
      ) : (
        <TextCommon style={{ marginTop: 20 }}>No reviews</TextCommon>
      )}
    </View>
  );
};

TabReviews.propTypes = {
  onLayout: PropTypes.func
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20
  },
  item: {
    marginVertical: 20
  },
  title: {
    marginBottom: 10,
    fontSize: 18
  },
  textBox: {
    backgroundColor: Colors.tab_fill,
    padding: 10,
    borderRadius: 5
  },
  text: {
    fontSize: 12,
    lineHeight: 16
  },
  btnBox: {
    marginTop: 5,
    alignItems: "flex-end"
  }
});

export default React.memo(TabReviews);
