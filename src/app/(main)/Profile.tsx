import React, { useMemo, useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import ProfileOptionButton from "@/src/components/button/ProfileOptionButton";
import LogoutButton from "@/src/components/button/LogoutButton";
import ProfileHEader from "@/src/components/header/ProfileHEader";
import useSettingsOptions from "@/src/hook/useSettingsOptions";
import useOtherOption from "@/src/hook/useOtherOption";
import { useAuth } from "@clerk/clerk-expo";
import storage from "@/src/utils/mmkv/storage";
import Syntax from "@/src/constant/Syntax";
import { userContext } from "@/src/context/ContextApi";
import useGetprofileDara from "@/src/hook/useGetprofileDara";

const SettingsPage = () => {
  const { storeProfileData, setStoreProfileData, setPhoneNumber } =
    userContext();
  const { signOut } = useAuth();
  const router = useRouter();
  const settingsOptions = useSettingsOptions();
  const otherOptions = useOtherOption();
  const bottomSheetRef = useRef<BottomSheet>(null);
  // Snap points for the bottom sheet
  const snapPoints = useMemo(() => ["35%"], []);

  useEffect(() => {
    bottomSheetRef.current?.close();
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const handleLogout = async () => {
    await await signOut();
    storage.delete(Syntax.AUTHKEY);
    await storage.delete(Syntax.USERDATA_BY_AUTH);
    await setStoreProfileData(null);
    await setPhoneNumber(null);
    router.replace("/(auth)");
  };

  return (
    <SafeAreaView className="w-full bg-[#c4c1e0] relative">
      {storeProfileData ? (
        <View className="w-full h-full">
          {/* Header Section */}
          <View className="w-full bg-[#c4c1e0] h-48 px-5 pt-3">
            <ProfileHEader />
          </View>

          {/* Main Content */}
          <View className="flex-auto bg-white rounded-t-[35px]">
            <ScrollView className="px-5 py-10">
              {/* Account Settings Section */}
              <View className="flex-col gap-10">
                <View className="flex-col gap-5">
                  <Text className="text-2xl font-extrabold text-zinc-600">
                    Account Settings
                  </Text>
                  <View className="flex-col gap-7">
                    {settingsOptions.map((item, index) => (
                      <ProfileOptionButton key={index} item={item} />
                    ))}
                  </View>
                </View>

                {/* Other Options Section */}
                <View className="flex-col gap-5">
                  <Text className="text-2xl font-extrabold text-zinc-600">
                    Other
                  </Text>
                  <View className="flex-col gap-7">
                    {otherOptions.map((item, index) => (
                      <ProfileOptionButton key={index} item={item} />
                    ))}
                  </View>
                </View>
              </View>

              {/* Logout Button */}
              <View className="w-full flex items-center justify-center px-4 mt-20">
                <LogoutButton action={openBottomSheet} />
              </View>
            </ScrollView>

            {/* Logout Confirmation Bottom Sheet */}
            <BottomSheet
              ref={bottomSheetRef}
              snapPoints={snapPoints}
              enablePanDownToClose={true}
              index={-1} // Initially hidden
            >
              <BottomSheetView style={styles.contentContainer}>
                <View className="w-full flex items-center justify-center pt-5">
                  <Text className="text-4xl font-semibold">
                    <Text className="text-red-500 font-extrabold">L</Text>og
                    <Text className="text-red-500 font-extrabold">O</Text>ut
                  </Text>
                </View>
                <View className="w-full flex-row gap-5 px-10 mt-5">
                  <TouchableOpacity
                    className="h-14 bg-[#c4c1e0] w-1/2 flex items-center justify-center rounded-2xl"
                    onPress={handleLogout}
                  >
                    <Text className="text-2xl font-semibold text-white">
                      Yes
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-14 bg-[#7c73e6] w-1/2 flex items-center justify-center rounded-2xl"
                    onPress={closeBottomSheet}
                  >
                    <Text className="text-2xl font-semibold text-white">
                      No
                    </Text>
                  </TouchableOpacity>
                </View>
              </BottomSheetView>
            </BottomSheet>
          </View>
        </View>
      ) : (
        <View className="w-full h-full flex items-center justify-center">
          <ActivityIndicator size="large" color="#7c73e6" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default SettingsPage;
