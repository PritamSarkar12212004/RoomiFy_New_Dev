import "../../global.css";
import { View, Text, StatusBar } from "react-native";
import React from "react";

import { Stack } from "expo-router";
import { ContextProvider } from "../context/ContextApi";
const _layout = () => {
  return (
    <>
      <ContextProvider>
        <MainLayout />
      </ContextProvider>
    </>
  );
};
const MainLayout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default _layout;
