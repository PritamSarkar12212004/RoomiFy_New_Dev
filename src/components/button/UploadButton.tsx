import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const UploadButton = () => {
  const navigation = useNavigation();
  const handleUpload = () => {
    navigation.navigate("UploadImage");
  };
  return (
    <TouchableOpacity
      onPress={() => handleUpload()}
      activeOpacity={0.8}
      className="w-full backdrop-blur-sm px-4 py-4 rounded-3xl bg-[#7c73e6]/90"
    >
      <Text className="text-white  text-center text-2xl font-extrabold">
        Upload
      </Text>
    </TouchableOpacity>
  );
};

export default UploadButton;
