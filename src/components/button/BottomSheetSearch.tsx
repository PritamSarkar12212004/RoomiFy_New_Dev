import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";

const BottomSheetSearch = () => {
  return (
    <View className="w-full relative">
      <TextInput
        className="w-full pl-16 gap-5 border-[1px] px-5 text-lg  font-bold border-zinc-500 h-16 bg-zinc-200/80 backdrop-blur-3xl rounded-[40px] flex-row items-center"
        placeholder="Search rooms Area name . Categore"
      />
      <View className="absolute left-5 top-5">
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </View>
  );
};

export default BottomSheetSearch;
