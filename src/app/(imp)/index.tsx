import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SaveChangeButton from "@/src/components/button/SaveChangeButton";
import { userContext } from "@/src/context/ContextApi";

const ProfileEdit = () => {
  const { storeProfileData } = userContext();
  console.log(storeProfileData);
  return (
    <SafeAreaView className="w-full h-full gap-10 bg-white">
      <View className="w-full bg-white px-4 py-2">
        <ProfileSubHead title="Profile Information" />
      </View>
      <View className="flex-auto flex-col justify-between pb-10 gap-4 px-4">
        <View className="w-full">
          <View className="w-full flex items-center justify-center">
            <View className="h-48 w-48 rounded-full  relative">
              <TouchableOpacity
                className="absolute bottom-5 right-3 z-10 h-12 w-12 bg-white rounded-full flex items-center justify-center"
                activeOpacity={0.8}
              >
                <FontAwesome5 name="edit" size={24} color="#7c73e6" />
              </TouchableOpacity>
              <Image
                source={{
                  uri: storeProfileData.profileImag
                    ? storeProfileData.profileImag
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                }}
                className="h-48 w-48 rounded-full"
                resizeMode="cover"
              />
            </View>
          </View>
          <View className="w-full flex-col gap-5">
            <View className="w-full flex-col gap-2">
              <Text className="text-xl font-bold text-zinc-600">Name</Text>
              <TextInput
                placeholder={
                  storeProfileData.name ? storeProfileData.name : "User"
                }
                className="text-lg border-[1px] border-zinc-100 px-5 h-14 font-semibold  tracking-widest   leading-loose   rounded-2xl"
              />
            </View>
            <View className="w-full flex-col gap-2">
              <Text className="text-xl font-bold text-zinc-600">
                Phone Number
              </Text>
              <TextInput
                keyboardType="number-pad"
                placeholder={
                  storeProfileData.phoneNumber
                    ? storeProfileData.phoneNumber.toString()
                    : "xxx-xx-xxx-xx"
                }
                className="text-lg border-[1px] border-zinc-100 px-5 h-14 font-semibold  tracking-widest   leading-loose   rounded-2xl"
              />
            </View>
            <View className="w-full flex-col gap-2">
              <Text className="text-xl font-bold text-zinc-600">Email</Text>
              <TextInput
                keyboardType="number-pad"
                placeholder={
                  storeProfileData.email
                    ? storeProfileData.email
                    : "xyz@gmail.com"
                }
                className="text-lg border-[1px] border-zinc-100 px-5 h-14 font-semibold  tracking-widest   leading-loose   rounded-2xl"
              />
            </View>
          </View>
        </View>
        <SaveChangeButton />
      </View>
    </SafeAreaView>
  );
};

export default ProfileEdit;
