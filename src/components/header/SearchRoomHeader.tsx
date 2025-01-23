import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Color from "@/src/constant/Color";

const SearchRoomHeader = () => {
  return (
    <View className="w-full items-center flex  px-5">
      <View className="w-full flex items-center justify-center mt-3 relative">
        <TextInput
          className="h-20 text-xl font-bold w-full bg-gray-50 rounded-[35px] pl-5 pr-24"
          placeholder="What are you looking for?"
          autoFocus
        />
        <TouchableOpacity
          className="h-16 w-16 absolute right-6 top-2 flex items-center justify-center rounded-full"
          style={{ backgroundColor: Color.primary }}
        >
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchRoomHeader;
