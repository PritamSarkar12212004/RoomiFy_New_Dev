import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <MainLayout />
    </GestureHandlerRootView>
  );
};

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="ShowImagwGallery"
        options={{ animation: "slide_from_bottom" }}
      />
    </Stack>
  );
};
export default _layout;
