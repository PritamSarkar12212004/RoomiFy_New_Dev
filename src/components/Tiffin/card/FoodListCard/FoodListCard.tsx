import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const FoodListCard = () => {
  const router = useRouter();
  const acrion = () => {
    router.push("/(show)/TiffinListShow");
  };
  return (
    <TouchableOpacity
      onPress={() => acrion()}
      className="w-full border-[1px]  rounded-t-[30px] border-gray-200 rounded-b-3xl pb-7 relative"
      activeOpacity={0.8}
    >
      <Image
        source={{
          uri: "https://indiaeatmania.in/wp-content/uploads/2021/05/Untitled-1vxcds32523-1.jpg",
        }}
        className="w-full h-64 rounded-t-[30px]"
        resizeMode="cover"
      />
      <View className="w-full absolute top-0 left-0 flex items-end justify-center px-5 py-4">
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-black/30"
        >
          <AntDesign name="heart" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View className="w-full pt-2 px-3">
        <View className="w-full flex-row items-center justify-between">
          <Text className="text-2xl font-semibold">Sai Mess</Text>
          <Text className="text-lg font-semibold">₹ 100/mon</Text>
        </View>
        <View className="w-full flex-row items-center gap-3">
          <Text className="text-lg font-semibold text-zinc-500">Veg</Text>
          <View className="flex-row gap-5 items-center justify-center">
            <View className="flex-row gap-1 items-center justify-center">
              <AntDesign name="star" size={20} color="orange" />
              <Text className="text-lg font-semibold text-zinc-500">4.5</Text>
            </View>
            <View className="flex-row items-center justify-center gap-2">
              <MaterialCommunityIcons
                name="motorbike"
                size={20}
                color="black"
              />
              <Text className="text-sm font-semibold text-zinc-500">
                Home Delivery
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodListCard;
