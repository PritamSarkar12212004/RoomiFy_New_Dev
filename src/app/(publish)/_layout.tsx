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
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true, // Enable swipe gestures
        gestureDirection: "horizontal", // Swipe direction
        animation: "slide_from_right", // Animation for screen transition
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="UploadImage"
        options={{
          gestureEnabled: true, // Enable swipe gestures
          gestureDirection: "vertical", // Swipe direction
          animation: "slide_from_bottom", // Animation for screen transition
        }}
      />
      <Stack.Screen
        name="SuccessUploadScreen"
        options={{
          gestureEnabled: true, // Enable swipe gestures
          gestureDirection: "vertical", // Swipe direction
          animation: "slide_from_bottom", // Animation for screen transition
        }}
      />
    </Stack>
  );
};

export default _layout;
