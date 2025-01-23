import { View, Text } from "react-native";
import React from "react";
import ImageView from "react-native-image-viewing";

const ImageViewScreen = ({
  images,
  visible,
  setIsVisible,
  imageIndexShow,
}: any) => {
  return (
    <ImageView
      images={images}
      keyExtractor={(item, index) => index.toString()}
      imageIndex={imageIndexShow}
      visible={visible}
      onRequestClose={() => setIsVisible(false)}
      animationType="slide"
    />
  );
};

export default ImageViewScreen;
