import { View, Text, BackHandler } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/src/constant/Color";
import { useNavigation } from "expo-router";


const UploadImage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Disable the back button
    const handleBackPress = () => {
      // Do nothing, just disable the back action
      return true; // Returning true blocks the default back action
    };

    // Add event listener for back button
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    // Navigate to the success screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate("SuccessUploadScreen");
    }, 3000);

    // Cleanup: Remove the listener and clear timeout
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView
      className="w-full h-full"
      style={{ backgroundColor: Color.bg }}
    >
      <View
        className="w-full h-full flex items-center justify-between py-10"
        style={{ backgroundColor: Color.bg }}
      >
        <View />

        <View className="w-full gap-1 flex items-center justify-center px-10">
          <Text className="text-center text-lg text-zinc-700 font-extrabold">
            ⏳ Please wait a few seconds...
          </Text>
          <Text
            className="text-center text-xl font-extrabold"
            style={{ color: Color.text }}
          >
            We promise it won’t take long!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadImage;
