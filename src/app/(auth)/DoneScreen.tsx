import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import Color from "@/src/constant/Color";
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
      className="w-full h-full  flex justify-center items-center"
      style={{ backgroundColor: Color.bg }}
    >
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        exercitationem itaque repudiandae eos, facilis voluptatibus similique
        soluta optio cum, cumque eligendi ullam, error deserunt unde non
        praesentium! Expedita, laboriosam amet.
      </Text>
    </View>
  );
};

export default DoneScreen;
