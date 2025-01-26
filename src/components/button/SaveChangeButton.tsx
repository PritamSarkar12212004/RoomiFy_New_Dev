import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const SaveChangeButton = ({ action, loading }: any) => {
  return (
    <TouchableOpacity
      onPress={() => (loading ? null : action())}
      activeOpacity={0.8}
      className="w-full h-16 bg-[#7c73e6] rounded-[25px] flex items-center justify-center"
    >
      {loading ? (
        <ActivityIndicator size={"large"} color={"white"} />
      ) : (
        <Text className="text-xl font-bold text-white">Save Change</Text>
      )}
    </TouchableOpacity>
  );
};

export default SaveChangeButton;
