import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import FoodListCard from "@/src/components/Tiffin/card/FoodListCard/FoodListCard";

const FoodListContainer = () => {
  return (
    <View className="w-full flex gap-5 px-3  ">
      <View className="w-full flex-row items-center justify-between ">
        <Text className="text-xl font-semibold">Recommended For you</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="w-full">
        <View className="flex items-center justify-center gap-5">
          <FoodListCard />
          <FoodListCard />
          <FoodListCard />
          <FoodListCard />
          <FoodListCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodListContainer;
