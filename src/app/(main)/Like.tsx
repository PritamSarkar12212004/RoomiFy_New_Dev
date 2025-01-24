import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/src/constant/Color";
import LootiANimation from "@/src/components/lottiAnimation/LootiANimation";
import Animation from "@/src/constant/Animation";

const Like = () => {
  return (
    <SafeAreaView
      className="h-full w-full"
      style={{ backgroundColor: Color.bg }}
    >
      <ScrollView className="w-full">
        <View className="w-full">
          <View className="w-full flex items-center justify-center">
            <LootiANimation
              path={Animation.Cart}
              width={300}
              height={200}
              bgColor={"white"}
            />
          </View>
          <View className="w-full flex items-center justify-center">
            <Text
              className="text-xl font-thin text-center px-20"
              style={{ color: Color.text }}
            >
              Explore your favourite food & Rooms
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Like;
