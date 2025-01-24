import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Index = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const actions = async () => {
    if (isSignedIn) {
      router.replace("/(main)");
    } else {
      router.replace("/(auth)");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      actions();
    }, 1500);

    return () => clearTimeout(timeoutId); // Clean up timeout on component unmount
  }, []);

  return (
    <View className="w-full h-full bg-[#f70776] flex justify-center items-center">
      <Text className="text-8xl font-extrabold text-white tracking-tighter leading-tight">
        RoomiFy
      </Text>
    </View>
  );
};

export default Index;
