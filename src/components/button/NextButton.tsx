import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../../constant/Color";

const NextButton = ({ action, loading }: any) => {
  return (
    <TouchableOpacity
      onPress={() => (loading ? null : action())}
      className={`w-full h-16  flex items-center justify-center rounded-[25px] tracking-widest leading-loose`}
      style={{ backgroundColor: Color.primary }}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator size="large" color={Color.bg} />
      ) : (
        <Text className="text-xl font-bold text-white">Next</Text>
      )}
    </TouchableOpacity>
  );
};

export default NextButton;
