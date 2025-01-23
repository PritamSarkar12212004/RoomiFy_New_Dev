import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

const usecontactOption = () => {
  const contactOption = [
    {
      icon: <Feather name="phone" size={24} color="#7c73e6" />,
      title: "Call Us",
      action: () => {
        console.log("Call");
      },
    },
    {
      icon: <MaterialIcons name="email" size={30} color="#7c73e6" />,
      title: "Email",
      action: () => {
        console.log("email");
      },
    },
    {
      icon: <FontAwesome6 name="whatsapp" size={30} color="#7c73e6" />,
      title: "Whatsapp",
      action: () => {
        console.log("whatsapp");
      },
    },
  ];
  return contactOption;
};
export default usecontactOption;
