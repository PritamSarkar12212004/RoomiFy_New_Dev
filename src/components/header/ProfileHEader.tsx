import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";

const ProfileHEader = () => {
  const navigate = useNavigation();
  const action = () => {
    navigate.goBack();
  };
  return (
    <View className="w-full h-full flex justify-between ">
      <View className="w-full  flex-row justify-between items-center">
        <Text className="text-3xl font-extrabold text-[#7c73e6]">Profile</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={() => action()}>
          <Ionicons name="remove-circle-outline" size={35} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="flex-auto flex-row gap-5  items-center">
        <View className="h-28 w-28 opacity-75 rounded-full">
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg",
            }}
            className="w-full h-full rounded-full"
          />
        </View>
        <View className="">
          <Text className="text-2xl font-extrabold text-[#393e46]">
            Pritam Sarkar
          </Text>
          <Text className=" text-lg font-semibold text-[#565b64]">
            7796419792
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHEader;
