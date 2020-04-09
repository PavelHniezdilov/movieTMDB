import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import Carousel from "react-native-snap-carousel";
import TextCommon from "../ui/TextCommon";
import Config from "react-native-config";
import Colors from "../../constants/Colors";

const { width: screenWidth } = Dimensions.get("window");

const CarouselPreview = props => {
  const data = props.data;

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => props.onPress(item.id)}>
          <View>
            <View style={styles.imgBox}>
              <Image
                style={styles.image}
                source={{ uri: `${Config.MOVIE_IMG_BASE_URL}/w154${item.img}` }}
              />
            </View>
            <TextCommon bold style={styles.title}>
              {item.title}
            </TextCommon>
            <View style={styles.infoBox}>
              <TextCommon style={styles.info}>
                {item.year}, rating: {item.vote}
              </TextCommon>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    setEntries(data);
  }, [data]);

  return (
    <View style={styles.wrap}>
      <Carousel
        layout={"default"}
        ref={carouselRef}
        sliderWidth={screenWidth - 20}
        itemWidth={180}
        data={entries}
        renderItem={renderItem}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        contentContainerCustomStyle={{
          overflow: "hidden",
          width: 180 * data.length
        }}
      />
    </View>
  );
};

CarouselPreview.propTypes = {
  data: PropTypes.array,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  wrap: {},
  item: {
    alignItems: "center",
    marginRight: 20
  },
  image: {
    width: 154,
    height: 231
  },
  imgBox: {
    alignItems: "center",
    marginBottom: 10
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 18
  },
  infoBox: {
    alignItems: "center",
    marginTop: 10
  },
  info: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.dop_text,
    textAlign: "center"
  }
});

export default CarouselPreview;
