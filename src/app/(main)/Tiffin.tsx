import { View, Text, ScrollView } from "react-native";
import React from "react";
import TiffinHeader from "@/src/components/header/TiffinHeader";
import Color from "@/src/constant/Color";
import FoodTypeCard from "@/src/components/Tiffin/card/FoodTypeCard/FoodTypeCard";
import FoodCategory from "@/src/components/container/Tiffin/FoodCateguary/FoodCategory";
import PopularTiffinervicesContauner from "@/src/components/container/Tiffin/PopularTimminServices/PopularTiffinervicesContauner";
import FoodListContainer from "@/src/components/container/Tiffin/FoodListContainer/FoodListContainer";

const Tiffin = () => {
  return (
    <ScrollView className="w-full h-full" style={{ backgroundColor: Color.bg }}>
      <View className="w-full   " style={{ backgroundColor: Color.bg }}>
        <TiffinHeader />
      </View>
      <View
        className="w-full flex-auto mt-10"
        style={{ backgroundColor: Color.bg }}
      >
        <View className="w-full flex items-center justify-center">
          <FoodTypeCard />
        </View>
        <View className="w-full  mt-5">
          <FoodCategory />
        </View>
        <View className="w-full mt-5 ">
          <PopularTiffinervicesContauner />
        </View>
        <View className="w-full mt-5 mb-28">
          <FoodListContainer />
        </View>
      </View>
    </ScrollView>
  );
};

export default Tiffin;
