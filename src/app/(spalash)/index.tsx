import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";
import NextButton from "@/src/components/button/NextButton";
import SkipButton from "@/src/components/button/SkipButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";
import ImageConstant from "@/src/constant/ImageConstant";
import LootiANimation from "@/src/components/lottiAnimation/LootiANimation";
import Animation from "@/src/constant/Animation";

const index = () => {
  const navigate = useNavigation();
  const action = () => {
    navigate.navigate("SplashTiffin");
  };

  return (
    <SafeAreaView className="bg-white">
      <View className=" w-full h-full bg-white flex items-center justify-between pb-5 px-5">
        <SkipButton />
        <View className="w-full flex-auto py-5 items-center justify-center">
          <View className="w-full flex items-center justify-center gap-5 mt-10">
            <View className="w-full  flex items-center justify-center">
              <LootiANimation
                path={Animation.HomeAnimation}
                width={350}
                height={300}
                bgColor={"white"}
              />
            </View>
            <Text className="text-3xl font-bold text-center">
              Wellcome to <Text className="text-[#7c73e6]">R</Text>oomi
              <Text className="text-[#7c73e6]">F</Text>y
            </Text>
            <Text className="text-center text-sm text-gray-500">
              Bridging Rooms and People with Ease Find the perfect room, flat,
              or tiffin service with just a few taps. Designed for students and
              locals to connect effortlessly.
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

export default index;
