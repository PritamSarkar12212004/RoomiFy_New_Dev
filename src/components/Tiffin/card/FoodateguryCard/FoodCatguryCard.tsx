import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const FoodCatguryCard = ({ title, icon }: any) => {
  const [active, setactive] = useState(false);
  const action = () => {
    setactive(!active);
  };
  return (
    <TouchableOpacity
      onPress={() => action()}
      activeOpacity={0.8}
      className={`w-32 h-52 flex- items-center justify-center gap-5  rounded-[60px]  ${
        active ? "bg-[#FF6C40]" : "bg-gray-100"
      } `}
    >
      <View className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </View>
      <Text
        className={`text-xl font-semibold tracking-widest text-wrap px-3 text-center ${
          active ? "text-white" : "text-[#FF6C40]"
        } `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FoodCatguryCard;
