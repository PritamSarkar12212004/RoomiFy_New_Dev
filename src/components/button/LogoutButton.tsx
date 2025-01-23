import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const LogoutButton = ({ action }: any) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className=" w-full h-16  bg-[#dc2f2f] flex items-center justify-center rounded-3xl"
      onPress={() => action()}
    >
      <Text className="text-xl font-semibold text-white">Log Out</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
