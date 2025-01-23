import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import ImageViewScreen from "../viewScreen/ImageViewScreen";

const ImageRenderer = ({ action }: any) => {
  const [visible, setIsVisible] = useState(false);
  const imagesList = [
    {
      uri: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [images, setimages] = useState(imagesList);
  const [imageIndexShow, setimageIndexShow] = useState(0);
  const showImage = (index: any) => {
    setimageIndexShow(index);
    setIsVisible(true);
  };
  return (
    <>
      <ImageViewScreen
        setIsVisible={setIsVisible}
        visible={visible}
        images={images}
        imageIndexShow={imageIndexShow}
      />
      <View className="w-full  flex-row justify-between items-center gap-4">
        {imagesList.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => showImage(index)}
              key={index}
              activeOpacity={0.8}
              className="w-28 h-36 rounded-3xl "
            >
              <Image
                source={{
                  uri: item.uri,
                }}
                className="w-full h-full rounded-3xl"
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        })}

        <View className="flex relative fex-row rel">
          <View className="w-28 h-36 rounded-3xl ">
            <Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1674730952112-965c8e4decf4?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              className="w-full h-full rounded-3xl"
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-28 h-36 rounded-3xl absolute top-0 left-5"
          >
            <TouchableOpacity
              onPress={() => action()}
              activeOpacity={0.8}
              className="w-full h-full absolute bg-zinc-800/60 z-10 rounded-3xl flex items-center justify-center "
            >
              <Text className="text-2xl font-bold  text-white">10+</Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1438954936179-786078772609?q=80&w=1645&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              className="w-full h-full rounded-3xl"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ImageRenderer;
