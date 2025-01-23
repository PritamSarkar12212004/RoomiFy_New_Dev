import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
const HeadGoback = () => {
  const navigate = useNavigation();
  return (
    <View className="w-full flex-row  items-center justify-between">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate.goBack()}
        className="w-10 h-10 flex items-center justify-center bg-[#e4f1fe] rounded-full"
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <Text className="text-xl font-semibold">
        <Text className="text-[#7c73e6]">R</Text>oomi
        <Text className="text-[#7c73e6]">F</Text>y
      </Text>
    </View>
  );
};

export default HeadGoback;
