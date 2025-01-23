import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

const useOtherOption = () => {
  const navigation = useNavigation();

  const otherOptions = [
    {
      icon: <AntDesign name="questioncircleo" size={30} color="#7c73e6" />,
      title: "FAQ",
      navigate: () => {
        navigation.navigate("FAQ");
      },
    },
    {
      icon: <AntDesign name="warning" size={30} color="#7c73e6" />,
      title: "Help Center",
      navigate: () => {
        navigation.navigate("HelpCenter");
      },
    },
  ];
  return otherOptions;
};

export default useOtherOption;
