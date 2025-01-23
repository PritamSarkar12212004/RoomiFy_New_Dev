import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "@/src/components/header/MainHeader";
import Color from "@/src/constant/Color";
import UploaderOptionButton from "@/src/components/button/UploaderOptionButton";

const Upload = () => {
  return (
    <SafeAreaView
      className="w-full h-full  "
      style={{ backgroundColor: Color.bg }}
    >
      <MainHeader />
      <View className="w-full h-full flex-col items-center  px-4 py-4 ">
        <UploaderOptionButton />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default Upload;
