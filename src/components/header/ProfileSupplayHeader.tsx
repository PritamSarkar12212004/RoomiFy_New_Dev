import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileSupplayHeader = ({ title, page }: any) => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex-row items-center justify-between">
      <View className="flex-row items-center gap-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-[#393e46] ">{title}</Text>
      </View>
      <Text className="text-xl font-semibold text-[#7c73e6]">{page}</Text>
    </View>
  );
};

export default ProfileSupplayHeader;
