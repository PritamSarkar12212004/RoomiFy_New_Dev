import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const PopularTiffinServicesCard = ({ title, image }: any) => {
  return (
    <View className="w-72 h-96 rounded-[50px] bg-[#FC6749] relative">
      <View className="w-full z-10 absolute top-5 left-0 px-5 flex-row items-center justify-between">
        <TouchableOpacity className="h-14 w-28 bg-zinc-300/20 rounded-full flex-row gap-2 flex items-center justify-center backdrop-blur-sm">
          <AntDesign name="star" size={24} color="white" />
          <Text className="text-lg font-extrabold text-white">4.5</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-16 w-16 bg-zinc-300/20 rounded-full flex-row gap-2 flex items-center justify-center backdrop-blur-sm">
          <AntDesign name="heart" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="w-full relative">
        <Image
          source={{
            uri: image,
          }}
          className="w-full rounded-[50px] h-full"
          resizeMode="cover"
        />
        <View className="w-full h-full absolute top-0 rounded-[50px] bg-zinc-900/30 flex items-center justify-end py-10 px-5">
          <Text className="text-4xl text-wrap text-center font-extrabold text-white ">
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PopularTiffinServicesCard;
