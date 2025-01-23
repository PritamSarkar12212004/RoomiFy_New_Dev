import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";
import NextButton from "@/src/components/button/NextButton";
import SkipButton from "@/src/components/button/SkipButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ImageConstant from "@/src/constant/ImageConstant";

const SplashTiffin = () => {
  const router = useRouter();
  const action = () => {
    router.replace("/(auth)");
  };

  return (
    <SafeAreaView className="bg-white">
      <View className=" w-full h-full bg-white flex items-center justify-between pb-5 px-5">
        <SkipButton />
        <View className="w-full flex-auto py-5 items-center justify-center">
        <Image
            source={ImageConstant.Tiffin}
            className="w-full h-96"
            resizeMode="contain"
          />
          <View className="w-full flex items-center justify-center gap-5 mt-10">
            <Text className="text-3xl font-bold text-center">
              <Text className="text-[#7c73e6]">R</Text>oomi
              <Text className="text-[#7c73e6]">F</Text>y
              <Text>Tiffin Service</Text>
            </Text>
            <Text className="text-center text-sm text-gray-500">
              Bridging Taste and Convenience Discover affordable and delicious
              tiffin services near you. Perfectly crafted for students and
              locals to enjoy homemade meals with just a few taps.
            </Text>
          </View>
        </View>
        <View className="w-full">
          <NextButton action={action} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashTiffin;
