import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const MainCard = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="w-full rounded-3xl border-[1px] border-zinc-200"
    >
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/12/a6/97/12a697d3fa5d48778f9cc771da5d0a99.jpg",
        }}
        className="w-full h-72 rounded-t-3xl"
        resizeMode="cover"
      />
      <View className="w-full px-3 py-3 flex gap-2">
        <View className="w-full flex-row items-center justify-between ">
          <Text className="text-2xl font-bold">Sarkar Room</Text>
          <Text className="text-xl font-semibold text-zinc-700">$2000/mon</Text>
        </View>
        <View className="w-full flex-row items-center justify-between">
          <Text className="  font-semibold text-zinc-500">
            Nagpur,vasudev nagar
          </Text>
          <Text className="font-semibold text-zinc-500">Room</Text>
        </View>
        <View className="w-full flex-row justify-center items-center bg-blue-600">
          <Text>Ssss</Text>
          <View className="flex-row items-center justify-center ga-2">
            <Entypo name="star" size={24} color="black" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MainCard;
