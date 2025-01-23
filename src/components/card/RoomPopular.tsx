import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const RoomPopular = () => {
  const image = [
    {
      uri: "https://i.pinimg.com/736x/c4/8d/fd/c48dfd20dcddd1a9b9d311eac813ad98.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/4c/ca/e6/4ccae6776b49c272d6f9061d97bff54c.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/05/e5/25/05e525089c4a4d90a7b7fbb69e47b01b.jpg",
    },
  ];
  return (
    <View className="flex-row items-center justify-center gap-5">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        data={image}
        keyExtractor={(item) => item.uri}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-64 mr-5 w-44 relative border-[1px] border-gray-200  rounded-3xl"
          >
            <Image
              source={{
                uri: item.uri,
              }}
              resizeMode="cover"
              className="w-full h-full rounded-t-3xl rounded-bl-3xl rounded-br-[90px]"
            />
            <View className="absolute bottom-3 right-1">
              <Feather name="arrow-up-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RoomPopular;
