import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

const SearchPopularDestination = () => {
  return (
    <View className="w-full h-full  px-3 gap-4 mt-10">
      <Text className="text-3xl  leading-10 tracking-widest text-zinc-600 font-semibold">
        Popular Destination
      </Text>
      <ScrollView horizontal className="w-full">
        <View className="flex-row gap-5 ">
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-72 h-96  rounded-[30] relative"
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/5e/51/17/5e5117ffe99f025a854dc3cf4e7ded86.jpg",
              }}
              className="w-full h-full rounded-[30]"
              resizeMode="cover"
            />
            <View className="w-full h-full rounded-[30] absolute top-0 left-0 bg-zinc-900/50 p-10">
              <Text className="text-white font-extrabold text-4xl">
                Chatrapati Squre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-72 h-96  rounded-[30] relative"
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/4b/a5/2d/4ba52dfac2588053a3fca9e851aa7749.jpg",
              }}
              className="w-full h-full rounded-[30]"
              resizeMode="cover"
            />
            <View className="w-full h-full rounded-[30] absolute top-0 left-0 bg-zinc-900/50 p-10">
              <Text className="text-white font-extrabold text-4xl">
                MIDC , Hingna
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-72 h-96  rounded-[30] relative"
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/a6/be/0a/a6be0ac9155bd69a807ed2d1678a5d3b.jpg",
              }}
              className="w-full h-full rounded-[30]"
              resizeMode="cover"
            />
            <View className="w-full h-full rounded-[30] absolute top-0 left-0 bg-zinc-900/50 p-10">
              <Text className="text-white font-extrabold text-4xl">
                Medical Squre
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchPopularDestination;
