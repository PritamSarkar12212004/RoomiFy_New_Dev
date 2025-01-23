import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";

const MainHeader = ({ openBottomSheet }: any) => {
  const router = useRouter();
  const route = useRoute();
  return (
    <View className="w-full bg-white border-b-[1px] border-b-zinc-200  z-50  px-3 pb-2 flex  flex-row items-center justify-between ">
      <View className=" flex-row items-center gap-2">
        <Text className="text-2xl font-bold text-[#7c73e6]">
          <Text className="text-3xl font-extrabold">R</Text>oomiFy
        </Text>
      </View>
      <View className="flex-row items-center justify-center gap-5">
        <TouchableOpacity>
          {route.name === "index" ? (
            <Ionicons name="bed" size={28} color="gray" />
          ) : route.name === "Tiffin" ? (
            <FontAwesome6 name="box" size={28} color="gray" />
          ) : null}
        </TouchableOpacity>
        {route.name !== "Upload" ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => openBottomSheet()}
          >
            <Entypo name="notification" size={24} color="#ff5722" />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          className="w-10 rounded-full  flex items-center justify-center h-10 bg-[#7c73e6]"
          activeOpacity={0.8}
          onPress={() => router.push("/(imp)")}
        >
          <Text className=" font-extrabold text-white">P</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;
