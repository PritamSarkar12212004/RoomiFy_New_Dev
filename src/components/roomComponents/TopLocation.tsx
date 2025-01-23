import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import studentBusyAreas from "@/src/data/topAreaLocation";

const TopLocation = () => {
  return (
    <View className="w-full flex-col gap-4 py-3  rounded-lg">
      {/* Location List */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={studentBusyAreas}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            className="rounded-full mr-3 bg-[#2563eb] px-5 py-3 shadow-lg shadow-[#93c5fd]"
          >
            <Text className="text-white text-center font-medium text-sm">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopLocation;
