import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import BtnText from "../ui/BtnText";
import TextCommon from "../ui/TextCommon";

const Pagination = props => {
  const { onNext, onPrev, onStart, page } = props;

  return (
    <View style={styles.wrap}>
      {page !== 1 && (
        <>
          <BtnText styleWrap={styles.btn} onPress={onStart}>
            1
          </BtnText>
          <BtnText styleWrap={styles.btn} onPress={onPrev}>
            Prev page
          </BtnText>
        </>
      )}
      <TextCommon bold styleWrap={{ ...styles.btn, ...styles.current }}>
        {page}
      </TextCommon>
      {page !== 1000 && (
        <BtnText styleWrap={styles.btn} onPress={onNext}>
          Next page
        </BtnText>
      )}
    </View>
  );
};

Pagination.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onStart: PropTypes.func,
  page: PropTypes.number
};

const styles = StyleSheet.create({
  wrap: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  btn: {
    marginHorizontal: 10
  },
  current: {
    fontSize: 16,
    marginHorizontal: 15
  }
});

export default Pagination;
