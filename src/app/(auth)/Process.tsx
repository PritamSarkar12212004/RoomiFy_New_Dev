import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/src/constant/Color";
import LootiANimation from "@/src/components/lottiAnimation/LootiANimation";
import Animation from "@/src/constant/Animation";
import { useRouter } from "expo-router";

const Process = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)/DoneScreen");
    }, 1500);
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: Color.bg }}>
      <View className="w-full h-full fkex items-center justify-center">
        <LootiANimation
          path={Animation.Process}
          width={300}
          height={300}
          bgColor={Color.bg}
        />
      </View>
    </SafeAreaView>
  );
};

export default Process;
