import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import Color from "@/src/constant/Color";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import { SafeAreaView } from "react-native-safe-area-context";
import RoomOptionDropDown from "@/src/components/dropdown/RoomOptionDropDown";
import RoomPublishOptionSelect from "@/src/components/button/RoomPublishOptionSelect";
import NextButton from "@/src/components/button/NextButton";
import { useNavigation } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { optionRoomType, optionPersion } from "@/src/data/RoomDetilesOption";

const RoomDetiles = () => {
  const navigate = useNavigation();

  const optionLight = [{ title: "Included" }, { title: " Not Included" }];
  const [waterFacility, setWaterFacility] = useState(false);
  const [bikeParking, setbikeParking] = useState(false);
  const [bedProvide, setbedProvide] = useState(false);
  const [fanProvide, setfanProvide] = useState(false);
  const [lightProvide, setlightProvide] = useState(false);
  const [wifiProvide, setwifiProvide] = useState(false);
  const [cupboard, setCupboard] = useState(false);
  const [studyTable, setstudyTable] = useState(false);
  const [chair, setchair] = useState(false);

  const action = () => {
    navigate.navigate("ImageSelect");
  };
  const facility = [
    {
      title: "Water facility",
      action: () => setWaterFacility((pre) => !pre),
      optionSelect: waterFacility,
      icon: (
        <Entypo
          name="water"
          size={24}
          color={waterFacility ? "#7c73e6" : "gray"}
        />
      ),
    },
    {
      title: "Bike Parking",
      action: () => setbikeParking((pre) => !pre),
      optionSelect: bikeParking,
      icon: (
        <MaterialCommunityIcons
          name="motorbike"
          size={24}
          color={bikeParking ? "#7c73e6" : "gray"}
        />
      ),
    },
    {
      title: "Cupboard storage",
      action: () => setCupboard((pre) => !pre),
      optionSelect: cupboard,
      icon: (
        <MaterialCommunityIcons
          name="cupboard"
          size={24}
          color={cupboard ? "#7c73e6" : "gray"}
        />
      ),
    },
    {
      title: "Study table",
      action: () => setstudyTable((pre) => !pre),
      optionSelect: studyTable,
      icon: (
        <FontAwesome
          name="table"
          size={24}
          color={studyTable ? "#7c73e6" : "gray"}
        />
      ),
    },
    {
      title: "Chair",
      action: () => setchair((pre) => !pre),
      optionSelect: chair,
      icon: (
        <FontAwesome5
          name="chair"
          size={24}
          color={chair ? "#7c73e6" : "gray"}
        />
      ),
    },
    {
      title: "Bed",
      action: () => setbedProvide((pre) => !pre),
      optionSelect: bedProvide,
      icon: (
        <FontAwesome
          name="bed"
          size={24}
          color={bedProvide ? "#7c73e6" : "gray"}
        />
      ),
    },
    {
      title: "Fan",
      action: () => setfanProvide((pre) => !pre),
      optionSelect: fanProvide,
      icon: (
        <FontAwesome5
          name="fan"
          size={24}
          color={fanProvide ? "#7c73e6" : "gray"}
        />
      ),
    },
    {
      title: "Light",
      action: () => setlightProvide((pre) => !pre),
      optionSelect: lightProvide,
      icon: (
        <FontAwesome
          name="lightbulb-o"
          size={24}
          color={lightProvide ? "#7c73e6" : "gray"}
        />
      ),
    },
    {
      title: "Wifi",
      action: () => setwifiProvide((pre) => !pre),
      optionSelect: wifiProvide,
      icon: (
        <FontAwesome
          name="wifi"
          size={24}
          color={wifiProvide ? "#7c73e6" : "gray"}
        />
      ),
    },
  ];

  return (
    <SafeAreaView
      className="w-full h-full"
      style={{ backgroundColor: Color.bg }}
    >
      <View
        className="w-full px-3 py-2flex "
        style={{ backgroundColor: Color.bg }}
      >
        <ProfileSubHead title="Room Details" />
      </View>
      <ScrollView className="flex-auto">
        <View className="w-full px-4 flex items-center justify-center ">
          <View className="w-full mt-10 flex-col gap-7">
            <View className="">
              <Text className="text-gray-700 text-lg font-semibold">
                Room Name
              </Text>
              <TextInput
                className="border-b-2 border-gray-300 py-2"
                placeholder="Owner Name"
              />
            </View>
            <View className="">
              <Text className="text-gray-700 text-lg font-semibold">
                Rent Per Month
              </Text>
              <TextInput
                className="border-b-2 border-gray-300 py-2"
                placeholder="2500/Mon"
                keyboardType="phone-pad"
              />
            </View>
            <RoomOptionDropDown title="Dedicate for" option={optionPersion} />
            <RoomOptionDropDown title="Room Type" option={optionRoomType} />
            <RoomOptionDropDown title="Electricty Bill" option={optionLight} />
            <View className="w-full flex-col items-center justify-center gap-5 ">
              {facility.map((item, index) => {
                return (
                  <RoomPublishOptionSelect
                    key={index}
                    title={item.title}
                    action={item.action}
                    selected={item.optionSelect}
                    icon={item.icon}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <View className="w-full flex items-center justify-center px-5 mb-10 mt-10 ">
          <NextButton action={action} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RoomDetiles;
