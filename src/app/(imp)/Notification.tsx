import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";

const Notification = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const [isEnabled3, setIsEnabled3] = useState(true);

  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);
  const toggleSwitch2 = () => setIsEnabled2((prevState) => !prevState);
  const toggleSwitch3 = () => setIsEnabled3((prevState) => !prevState);

  return (
    <SafeAreaView className="w-full h-full gap-10 bg-white">
      <View className="w-full bg-white px-4 py-2">
        <ProfileSubHead title="Notification Preferences" />
      </View>
      <View className="flex-auto flex-col pb-10 gap-2 px-4">
        {/* Push Notification */}
        <View className="w-full flex-row items-center justify-between">
          <Text className="text-xl font-bold text-zinc-600">
            Push Notification
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "gray" }}
            thumbColor={isEnabled ? "#7c73e6" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* App Update */}
        <View className="w-full flex-row items-center justify-between">
          <Text className="text-xl font-bold text-zinc-600">App Update</Text>
          <Switch
            trackColor={{ false: "#767577", true: "gray" }}
            thumbColor={isEnabled2 ? "#7c73e6" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>

        {/* Advertisement */}
        <View className="w-full flex-row items-center justify-between">
          <Text className="text-xl font-bold text-zinc-600">Advertisement</Text>
          <Switch
            trackColor={{ false: "#767577", true: "gray" }}
            thumbColor={isEnabled3 ? "#7c73e6" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
