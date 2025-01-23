import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const useOtherOption = () => {
  const router = useRouter();

  const otherOptions = [
    {
      icon: <AntDesign name="questioncircleo" size={30} color="#7c73e6" />,
      title: "FAQ",
      navigate: () => {
        router.push("/(imp)/FAQ");
      },
    },
    {
      icon: <AntDesign name="warning" size={30} color="#7c73e6" />,
      title: "Help Center",
      navigate: () => {
        router.push("/(imp)/HelpCenter");
      },
    },
  ];
  return otherOptions;
};

export default useOtherOption;
