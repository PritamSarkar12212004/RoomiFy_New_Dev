import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";

const ProfileSubHead = ({ title }: any) => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex-row items-center gap-4">
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text className="text-xl font-bold text-[#393e46] ">{title}</Text>
    </View>
  );
};

export default ProfileSubHead;
