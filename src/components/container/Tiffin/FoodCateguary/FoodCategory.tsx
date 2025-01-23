import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import FoodCatguryCard from "@/src/components/Tiffin/card/FoodateguryCard/FoodCatguryCard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const FoodCategory = () => {
  return (
    <View className="w-full flex gap-5 px-3  ">
      <View className="w-full flex-row items-center justify-between ">
        <Text className="text-xl font-semibold">Category</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text className="text-zinc-600">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="w-full flex-row items-center justify-between gap-3">
          <FoodCatguryCard
            title={"Non-Veg"}
            icon={
              <MaterialCommunityIcons
                name="food-turkey"
                size={40}
                color="orange"
              />
            }
          />
          <FoodCatguryCard
            title={"Veg"}
            icon={<FontAwesome6 name="bowl-food" size={40} color="#95C4B0" />}
          />
          <FoodCatguryCard
            title={"Non-Veg"}
            icon={
              <MaterialCommunityIcons
                name="food-turkey"
                size={40}
                color="orange"
              />
            }
          />
          <FoodCatguryCard
            title={"Veg"}
            icon={<FontAwesome6 name="bowl-food" size={40} color="#95C4B0" />}
          />
          <FoodCatguryCard
            title={"Non-Veg"}
            icon={
              <MaterialCommunityIcons
                name="food-turkey"
                size={40}
                color="orange"
              />
            }
          />
          <FoodCatguryCard
            title={"Veg"}
            icon={<FontAwesome6 name="bowl-food" size={40} color="#95C4B0" />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodCategory;
