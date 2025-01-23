import { View, Text, ScrollView } from "react-native";
import React from "react";
import FoodTypeCard from "@/src/components/Tiffin/card/FoodTypeCard/FoodTypeCard";

const FoodTypeContainer = () => {
  return (
    <ScrollView className="w-full">
      <View className="w-full  flex-row gap-4">
        <FoodTypeCard />
      </View>
    </ScrollView>
  );
};

export default FoodTypeContainer;
