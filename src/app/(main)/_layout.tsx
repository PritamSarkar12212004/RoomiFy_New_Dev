import React from "react";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image, Text, View } from "react-native";
import Color from "@/src/constant/Color";
import ProfileIcon from "@/src/image/Icons/ProfileIcon";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <MainLayout />
    </GestureHandlerRootView>
  );
};

const MainLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            borderTopColor: "white",
            height: 60,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                className="w-20 h-8  rounded-full  flex items-center justify-center"
                style={{ backgroundColor: Color.primary }}
              >
                <ProfileIcon />
              </View>
            ),
          }}
        />
        <Tabs.Screen name="Tiffin" />
        <Tabs.Screen name="Like" />
        <Tabs.Screen name="Upload" />
        <Tabs.Screen name="Profile" />
      </Tabs>
    </>
  );
};
export default _layout;
