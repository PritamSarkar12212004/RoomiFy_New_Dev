import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import usecontactOption from "@/src/hook/usecontactOption";

const HelpCenter = () => {
  const contactOption = usecontactOption();
  return (
    <SafeAreaView className="w-full h-full gap-10 bg-white">
      <View className="w-full bg-white px-4 py-2">
        <ProfileSubHead title="Help Center" />
      </View>
      <ScrollView className="flex-auto bg-white">
        <View className="flex-auto flex-col   gap-4 px-4">
          <View className="w-full flex items-center justify-center"></View>
          <View className="w-full flex-col items-center justify-center gap-10 px-2">
            {contactOption.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => item.action()}
                  key={index}
                  activeOpacity={0.8}
                  className="w-full flex items-center  justify-between flex-row gap-4 border-b border-gray-300 py-2"
                >
                  <View className=" gap-4 flex-row justify-between items-center">
                    <View>{item.icon}</View>
                    <Text className="text-xl font-semibold text-zinc-500">
                      {item.title}
                    </Text>
                  </View>
                  <View>
                    <Ionicons name="chevron-forward" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpCenter;
