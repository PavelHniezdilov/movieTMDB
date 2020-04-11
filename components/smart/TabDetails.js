import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import TextCommon from "../ui/TextCommon";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const TabDetails = props => {
  const data = useSelector(state => state.movie.movieDetails);

  return (
    <View
      style={styles.content}
      onLayout={e => props.onLayout(e.nativeEvent.layout.height)}
    >
      <View style={styles.row}>
        <View style={styles.colKey}>
          <TextCommon style={styles.key}>Year</TextCommon>
        </View>
        <View style={styles.colValue}>
          <TextCommon style={styles.value}>
            {data.release_date.slice(0, 4)}
          </TextCommon>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colKey}>
          <TextCommon style={styles.key}>Country</TextCommon>
        </View>
        <View style={styles.colValue}>
          <TextCommon style={styles.value}>
            {data.production_countries.map((item, idx) => {
              return (
                <TextCommon key={idx}>
                  {(idx ? ", " : "") + item.name}
                </TextCommon>
              );
            })}
          </TextCommon>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colKey}>
          <TextCommon style={styles.key}>Genres</TextCommon>
        </View>
        <View style={styles.colValue}>
          <TextCommon style={styles.value}>
            {data.genres.map((item, idx) => {
              return (
                <TextCommon key={idx}>
                  {(idx ? ", " : "") + item.name}
                </TextCommon>
              );
            })}
          </TextCommon>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colKey}>
          <TextCommon style={styles.key}>Budget</TextCommon>
        </View>
        <View style={styles.colValue}>
          <TextCommon style={styles.value}>{data.budget}$</TextCommon>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colKey}>
          <TextCommon style={styles.key}>Duration</TextCommon>
        </View>
        <View style={styles.colValue}>
          <TextCommon style={styles.value}>{data.runtime}</TextCommon>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colKey}>
          <TextCommon style={styles.key}>Rating</TextCommon>
        </View>
        <View style={styles.colValue}>
          <TextCommon style={styles.value}>{data.vote_average}</TextCommon>
        </View>
      </View>
    </View>
  );
};

TabDetails.propTypes = {
  onLayout: PropTypes.func
};

const styles = StyleSheet.create({
  content: {
    padding: 20
  },
  row: {
    marginBottom: 15,
    flexDirection: "row"
  },
  colKey: {
    width: "35%",
    paddingTop: 2
  },
  colValue: {
    flex: 1
  },
  key: {
    fontSize: 16,
    color: Colors.info_text
  },
  value: {
    fontSize: 17,
    lineHeight: 20
  }
});

export default React.memo(TabDetails);
