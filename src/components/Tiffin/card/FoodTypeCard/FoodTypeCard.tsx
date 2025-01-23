import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
const FoodTypeCard = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-56 w-[95%] bg-[#FF6C40] rounded-[30px]  relative"
    >
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/cartoon-indian-food-background_52683-69328.jpg?t=st=1737538121~exp=1737541721~hmac=6329a9ee0b5586dd0aa1b0350513a923260dd5f04424ecc989eed52255965c58&w=996",
        }}
        className="w-full h-full rounded-[30px]"
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default FoodTypeCard;
