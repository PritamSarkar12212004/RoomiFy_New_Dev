import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchRoomSeggution = () => {
  return (
    <View className="w-full mt-24 flex-row gap-5 items-center  px-3 justify-between ">
      <View className="flex items-center justify-center gap-1">
        <TouchableOpacity className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
          <Entypo name="line-graph" size={40} color="orange" />
        </TouchableOpacity>
        <Text className="text-sm text-zinc-500 font-semibold">Best Price</Text>
      </View>
      <View className="flex items-center justify-center gap-1">
        <TouchableOpacity className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
          <AntDesign name="star" size={40} color="red" />
        </TouchableOpacity>
        <Text className="text-sm text-zinc-500 font-semibold">Reting</Text>
      </View>
      <View className="flex items-center justify-center gap-1">
        <TouchableOpacity className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
          <FontAwesome name="location-arrow" size={40} color="#679BCB" />
        </TouchableOpacity>
        <Text className="text-sm text-zinc-500 font-semibold">Nearest</Text>
      </View>
      <View className="flex items-center justify-center gap-1">
        <TouchableOpacity className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
          <AntDesign name="link" size={40} color="blue" />
        </TouchableOpacity>
        <Text className="text-sm text-zinc-500 font-semibold">
          Independent{" "}
        </Text>
      </View>
    </View>
  );
};

export default SearchRoomSeggution;
