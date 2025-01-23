import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import { Image } from "react-native";
import ImageViewScreen from "@/src/components/viewScreen/ImageViewScreen";

const ShowImagwGallery = () => {
  const [visible, setIsVisible] = useState(false);
  const imagesList = [
    {
      uri: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      uri: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      uri: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      uri: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [images, setimages] = useState(imagesList);
  const [imageIndexShow, setimageIndexShow] = useState(0);
  const showImage = (index: any) => {
    setimageIndexShow(index);
    setIsVisible(true);
  };
  return (
    <SafeAreaView className="w-full h-full">
      <View className="w-full px-3 py-1">
        <ProfileSubHead title="Sarkar Home" />
      </View>
      <ScrollView className="w-full h-full ">
        <ImageViewScreen
          setIsVisible={setIsVisible}
          visible={visible}
          images={images}
          imageIndexShow={imageIndexShow}
        />
        <View className="w-full mb-20">
          {imagesList.map((item, index) => {
            return (
              <View key={index} className="w-full flex gap-2 mt-5">
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    showImage(index);
                  }}
                  className="w-full flex items-center  px-2"
                >
                  <Image
                    source={{
                      uri: item.uri,
                    }}
                    className="w-full h-80 "
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowImagwGallery;
