import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect, useRouter } from "expo-router";

const RoomSave = () => {
  const router = useRouter();
  const routePath = {
    allowPath: "/(imp)/RoomSave",
    deneyPath: "/(other)",
  };
  
  return (
    <View>
      <Text>RoomSave</Text>
    </View>
  );
};

export default RoomSave;
