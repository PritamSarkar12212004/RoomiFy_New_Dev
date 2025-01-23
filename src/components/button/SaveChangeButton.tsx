import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SaveChangeButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="w-full h-16 bg-[#7c73e6] rounded-[25px] flex items-center justify-center"
    >
      <Text className="text-xl font-bold text-white">Save Change</Text>
    </TouchableOpacity>
  );
};

export default SaveChangeButton;
