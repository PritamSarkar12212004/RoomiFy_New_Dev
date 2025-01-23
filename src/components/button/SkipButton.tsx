import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const SkipButton = () => {
  const router = useRouter();

  return (
    <View className="w-full flex items-end justify-center">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push("/(auth)")}
      >
        <Text className={` text-lg font-semibold text-[#7c73e6] `}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SkipButton;
