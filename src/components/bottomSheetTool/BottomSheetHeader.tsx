import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Color from "@/src/constant/Color";
const BottomSheetHeader = ({
  closeBottomSheet,
}: {
  closeBottomSheet: () => void;
}) => {
  return (
    <View className="w-full flex-row items-center justify-between px-2">
      <TouchableOpacity
        className="px-2 py-2"
        activeOpacity={0.8}
        onPress={() => {
          closeBottomSheet();
        }}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <Text className="text-lg font-bold" style={{ color: Color.text }}>
        Search
      </Text>
      <TouchableOpacity className="px-2 py-2" activeOpacity={0.8}>
        <MaterialCommunityIcons
          name="nintendo-switch"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetHeader;
