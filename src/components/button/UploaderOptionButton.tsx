import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Color from "@/src/constant/Color";
import { useRouter } from "expo-router";
import { userContext } from "@/src/context/ContextApi";
import RouteName from "@/src/constant/RouterName";
const UploaderOptionButton = () => {
  const {  setUploadRoutname } = userContext();
  const router = useRouter();
  const roomAction = (routerName: string) => {
    setUploadRoutname(routerName);
    router.push("/(publish)");
  };

  return (
    <View className="w-full  flex-col items-center justify-center gap-4">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => roomAction(RouteName.RoomUploader)}
        className="w-full h-36 rounded-3xl flex px-6 justify-center"
        style={{ backgroundColor: Color.uploadOptionCard1Color }}
      >
        <Text className="text-3xl font-extrabold text-white">
          Publish a Room
        </Text>
        <Text className="text-white pr-5">
          List your room today and connect with students and tenants in just a
          few clicks!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => roomAction(RouteName.TiffinUploader)}
        activeOpacity={0.8}
        className="w-full h-36 rounded-3xl flex px-6 justify-center"
        style={{ backgroundColor: Color.uploadOptionCard1Color2 }}
      >
        <Text className="text-3xl font-extrabold text-white">
          Publish a Tiffin
        </Text>
        <Text className="text-white pr-5">
          List your room today and connect with students and tenants in just a
          few clicks!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploaderOptionButton;
