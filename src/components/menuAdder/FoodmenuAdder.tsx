import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Color from "@/src/constant/Color";
import Ionicons from "@expo/vector-icons/Ionicons";

const FoodmenuAdder = ({ action }: any) => {
  return (
    <View className="w-full  ">
      <TouchableOpacity
        className="w-full"
        activeOpacity={0.8}
        onPress={() => action()}
      >
        <View
          className="w-full flex-row items-center justify-between rounded-lg p-4 shadow-lg"
          style={{ backgroundColor: Color.primary }}
        >
          <View className="flex-row items-center gap-4 space-x-3">
            {/* Icon */}
            <Ionicons name="fast-food-outline" size={28} color={Color.bg} />
            {/* Text */}
            <Text
              className="text-lg font-semibold"
              style={{ color: Color.bg }}
            >
              Add Food Menu
            </Text>
          </View>
          {/* Arrow Icon */}
          <Ionicons name="arrow-forward-outline" size={24} color={Color.bg} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FoodmenuAdder;
