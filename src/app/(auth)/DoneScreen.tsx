import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import Color from "@/src/constant/Color";
import LootiANimation from "@/src/components/lottiAnimation/LootiANimation";
import Animation from "@/src/constant/Animation";
const DoneScreen = () => {
  const router = useRouter();
  const authAdder = async () => {
    router.replace("/(main)");
  };

  useEffect(() => {
    setTimeout(() => {
      authAdder();
    }, 1500);
  }, []);

  return (
    <View
      className="w-full h-full  flex justify-center gap-10 items-center"
      style={{ backgroundColor: Color.bg }}
    >
      <View className="w-full  flex items-center justify-center">
        <LootiANimation
          path={Animation.SuccessAnimation}
          width={350}
          height={300}
          bgColor={"white"}
        />
      </View>
      <Text className="text-center text-lg font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        exercitationem itaque repudiandae eos, facilis voluptatibus similique
        soluta optio cum, cumque eligendi ullam, error deserunt unde non
        praesentium! Expedita, laboriosam amet.
      </Text>
    </View>
  );
};

export default DoneScreen;
