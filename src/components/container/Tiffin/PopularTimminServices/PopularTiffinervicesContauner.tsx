import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import PopularTiffinServicesCard from "@/src/components/Tiffin/card/PopularTiffinServicesCard/PopularTiffinServicesCard";

const PopularTiffinervicesContauner = () => {
  return (
    <View className="w-full flex gap-5 px-3  ">
      <View className="w-full flex-row items-center justify-between ">
        <Text className="text-lg font-semibold text-zinc-600">
          Popular Tiffin Services
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="w-full flex-row items-center justify-between gap-3">
          <PopularTiffinServicesCard
            title={"Sai Mess"}
            image={
              "https://content.jdmagicbox.com/comp/def_content/tiffin-services/5-tiffin-services-10-eu2rc.jpg"
            }
          />
          <PopularTiffinServicesCard
            title={"Sarkar Mess"}
            image={
              "https://media.istockphoto.com/id/666181300/photo/indian-vegetarian-office-or-school-lunch-box-or-tiffin-with-north-indian-or-maharashtrian.jpg?s=612x612&w=0&k=20&c=ae6PeLTMaSroB7wKnkznV1Cg7HQv-uJSYAonkozFad8="
            }
          />
          <PopularTiffinServicesCard
            title={"Mayur Mess"}
            image={
              "https://5.imimg.com/data5/VB/HH/MY-40639660/best-tiffin-service-in-pune-at-just-rs-60.jpg"
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularTiffinervicesContauner;
