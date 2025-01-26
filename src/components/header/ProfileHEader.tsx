import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import { userContext } from "@/src/context/ContextApi";

const ProfileHEader = () => {
  const { storeProfileData } = userContext();
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
              uri: storeProfileData.profileImag
                ? storeProfileData.profileImag
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            className="h-full w-full rounded-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex ">
          <Text className="text-2xl font-extrabold text-[#393e46]">
            {storeProfileData.name ? storeProfileData.name : "User"}
          </Text>
          <Text className="  text-wrap  text-[#565b64]">
            {storeProfileData.phoneNumber
              ? storeProfileData.phoneNumber
              : "No Phone Number Provided"}
          </Text>
          <Text className="   text-wrap  text-[#565b64]">
            {storeProfileData.email
              ? storeProfileData.email
              : "No Email Provided"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHEader;
