import React from "react";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image, Text, View } from "react-native";
import Color from "@/src/constant/Color";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
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
              <View className="w-12 h-12  flex items-center justify-center gap-1">
                <FontAwesome6
                  name="house-chimney"
                  size={30}
                  color={focused ? Color.primary : "gray"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Tiffin"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="w-12 h-12  flex items-center justify-center gap-1">
                <Ionicons
                  name="fast-food"
                  size={30}
                  color={focused ? "orange" : "gray"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Upload"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="w-14 absolute h-14  flex items-center justify-center gap-1">
                <Ionicons
                  name="add-circle-outline"
                  size={50}
                  color={focused ? "#FF204E" : "#FF204E"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Like"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="w-12 h-12  flex items-center justify-center gap-1">
                <AntDesign
                  name="heart"
                  size={30}
                  color={focused ? "red" : "gray"}
                />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="w-12 h-12  flex items-center justify-center gap-1">
                <FontAwesome
                  name="user"
                  size={35}
                  color={focused ? "black" : "gray"}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};
export default _layout;
