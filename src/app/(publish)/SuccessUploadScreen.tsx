import { View, Text, Alert, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/src/constant/Color";
import { useRouter } from "expo-router";


const SuccessUploadScreen = () => {
  const [showView, setShowView] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowView(true);
    }, 2500);
  }, []);
  const router = useRouter();
  const handleGoHome = () => {
    router.replace("/(main)");
  };
  return (
    <SafeAreaView
      className="w-full h-full"
      style={{ backgroundColor: Color.bg }}
    >
      <View className="w-full h-full flex items-center justify-between py-10 ">
        <View />
        <View className="w-full flex items-center justify-center">
      
        </View>
        <View>
          {showView && (
            <View className="w-full flex items-center justify-center px-10">
              <TouchableOpacity
                onPress={() => handleGoHome()}
                activeOpacity={0.8}
                className="w-full backdrop-blur-sm px-4 py-4 rounded-3xl bg-[#7c73e6]/90"
              >
                <Text className="text-white  text-center text-2xl font-extrabold">
                  Goto Home
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessUploadScreen;
