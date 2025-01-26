import { View, ScrollView, Text } from "react-native";
import React, { useEffect } from "react";
import RoomIndexHeader from "@/src/components/header/RoomIndexHeader";
import RoomPopular from "@/src/components/card/RoomPopular";
import Allroom from "@/src/components/card/Allroom";
import useGetprofileDara from "@/src/hook/useGetprofileDara";
import { userContext } from "@/src/context/ContextApi";

const Index = () => {
  const { profileLoader, setprofileoader } = userContext();

  const { getProfileData } = useGetprofileDara();
  useEffect(() => {
    getProfileData();
  }, [profileLoader]);
  return (
    <>
      <ScrollView
        className="flex-auto h-full"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full">
          <RoomIndexHeader />
        </View>
        <View className="w-full mt-4">
          <View className="w-full flex gap-2  px-2">
            <Text className="text-2xl font-semibold leading-tight ">
              Popular Rooms
            </Text>
            <RoomPopular />
          </View>
          <View className="w-full flex gap-2  px-2 mt-10 mb-28">
            <Text className="text-2xl font-semibold leading-tight ">
              All Rooms
            </Text>
            <Allroom />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Index;
