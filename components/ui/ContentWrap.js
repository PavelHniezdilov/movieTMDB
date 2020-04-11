import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";

const ContentWrap = props => {
  let Content;

  if (props.scrollView) {
    Content = ScrollView;
  } else {
    Content = View;
  }

  return (
    <View style={{ ...styles.wrap, ...props.style }}>
      <Content style={styles.content}>{props.children}</Content>
    </View>
  );
};

ContentWrap.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  scrollView: PropTypes.bool
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingHorizontal: 20
  },
  content: {
    flex: 1,
  }
});

export default ContentWrap;
