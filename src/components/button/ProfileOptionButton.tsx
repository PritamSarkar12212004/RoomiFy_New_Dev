import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileOptionButton = (item: any) => {
  return (
    <TouchableOpacity
      className="w-full h-10 flex-row items-center justify-between"
      activeOpacity={0.8}
      onPress={() => item.item.navigate()}
    >
      <View className="flex-row gap-3 items-center">
        {item.item.icon}
        <Text className="text-lg">{item.item.title}</Text>
      </View>
      <View className="">
        <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileOptionButton;
