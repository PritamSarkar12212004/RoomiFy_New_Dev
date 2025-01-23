import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
const ShowPageHeader = () => {
  const navigate = useNavigation();
  return (
    <View className="w-full z-10 top-10 absolute px-3 flex-row items-center justify-between">
      <TouchableOpacity
        className="flex items-center justify-center"
        activeOpacity={0.8}
        onPress={navigate.goBack as any}
      >
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity className="w-12 h-12 rounded-full bg-zinc-500/60 flex items-center justify-center">
        <AntDesign name="hearto" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ShowPageHeader;
