import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Color from "@/src/constant/Color";

const RoomPublishOptionSelect = ({ title, action, selected, icon }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => action()}
      className="w-full px-3  h-12 flex-row justify-between rounded-2xl items-center border-zinc-200 border-[1px] "
    >
      <View className="flex-row items-center gap-2">
        {icon}

        <Text
          className={`text-lg font-bold  ${
            selected ? "text-[#7c73e6]" : "text-zinc-800 "
          }`}
        >
          {title}
        </Text>
      </View>
      <View className="h-9 w-9 flex items-center  justify-center rounded-full">
        {selected ? (
          <FontAwesome name="bookmark" size={24} color={Color.primary} />
        ) : (
          <FontAwesome name="bookmark-o" size={24} color="gray" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RoomPublishOptionSelect;
