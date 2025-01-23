import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const RoomLikeButton = () => {
  return (
    <TouchableOpacity className="w-12 h-12 rounded-full bg-white/40 flex items-center justify-center">
      <AntDesign name="hearto" size={24} color="gray" />
    </TouchableOpacity>
  );
};

export default RoomLikeButton;
