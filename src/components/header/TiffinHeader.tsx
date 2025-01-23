import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Color from "@/src/constant/Color";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
const TiffinHeader = () => {
  const router = useRouter();
  const ChangeRoute = () => {
    router.push("/(search)/SearchTiffin");
  };
  return (
    <SafeAreaView className="w-full" style={{ backgroundColor: Color.bg }}>
      <View className="w-full flex-row items-center justify-between px-3">
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center gap-2"
        >
          <View
            className="w-12 h-12 flex items-center justify-center rounded-full"
            style={{ backgroundColor: Color.primary }}
          >
            <Ionicons name="location-outline" size={30} color={Color.bg} />
          </View>
          <View className="flex">
            <Text className="text-2xl font-extrabold">Home</Text>
            <Text className="text-sm text-zinc-600">Kolkata, West Bengal</Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity activeOpacity={0.8} onPress={() => ChangeRoute()}>
            <AntDesign name="search1" size={30} color={Color.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-12 w-12 bg-gray-100 rounded-full"
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/b3/51/25/b35125ae6b3949e788faebbc783c0dab.jpg",
              }}
              className="w-full h-full rounded-full"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TiffinHeader;
