import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/src/constant/Color";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

const SearchRoom = () => {
  const navigate = useNavigation();
  const backFunc = () => {
    navigate.goBack();
  };

  return (
    <SafeAreaView
      className="w-full  h-full"
      style={{ backgroundColor: Color.bg }}
    >
      <View className="w-full h-full px-3">
        <View className="w-full flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => backFunc()}
            activeOpacity={0.8}
            className="w-10"
          >
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
          <View className="">
            <Text
              className="text-xl font-semibold"
              style={{ color: Color.primary }}
            >
              Search
            </Text>
          </View>
          <View className="w-10"></View>
        </View>
        <View className="w-full flex-row mt-4">
          <View className="flex-auto px-2">
            <TextInput
              className=" h-16 bg-gray-100 rounded-xl px-5 text-lg font-bold"
              placeholder="Sai Mees , paner Tikka"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-16 h-16 rounded-3xl flex items-center justify-center"
            style={{ backgroundColor: Color.primary }}
          >
            <AntDesign name="search1" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchRoom;
