import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import TopRoomData from "@/src/data/TopRoomData";
import RoomLikeButton from "../button/RoomLikeButton";

const TopRoomArea = () => {
  return (
    <View className="w-full flex-col gap-4   rounded-lg">
      {/* Title */}
      <Text className="text-2xl font-bold text-gray-800">Top Rooms</Text>

      {/* Horizontal List */}
      <FlatList
        data={TopRoomData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.name}
            className="mr-4 relative bg-white shadow-md rounded-xl overflow-hidden"
            activeOpacity={0.9}
          >
            {/* Like Button */}
            <View className="absolute z-10 top-3 right-3">
              <RoomLikeButton />
            </View>

            {/* Image */}
            <View className="h-48 w-72 rounded-t-xl overflow-hidden">
              <Image
                source={item.image}
                className="h-full w-full object-cover"
              />
            </View>

            {/* Content */}
            <View className="p-4">
              {/* Room Name and Type */}
              <View className="flex-row items-center justify-between">
                <Text className="text-[#4f46e5] font-semibold text-lg">
                  {item.name}
                </Text>
                <Text className="text-gray-500 text-sm">
                  {item.roomType || item.category}
                </Text>
              </View>

              {/* Price */}
              <Text className="text-gray-600 font-medium mt-2">
                ₹{item.pricePerMonth}/month
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopRoomArea;
