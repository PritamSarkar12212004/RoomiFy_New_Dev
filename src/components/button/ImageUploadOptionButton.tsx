import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Color from "@/src/constant/Color";
import Entypo from "@expo/vector-icons/Entypo";

const ImageUploadOptionButton = ({ title, action }: any) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      activeOpacity={0.8}
      className="w-32 h-32 bg-gray-200 rounded-3xl flex items-center justify-center"
    >
      {title === "Camera" ? (
        <Entypo name="camera" size={40} color={Color.primary} />
      ) : (
        <Entypo name="folder" size={40} color={Color.primary} />
      )}
    </TouchableOpacity>
  );
};

export default ImageUploadOptionButton;
