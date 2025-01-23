import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import Color from "@/src/constant/Color";
import { FlatList, TextInput } from "react-native-gesture-handler";
import RoomOptionDropDown from "@/src/components/dropdown/RoomOptionDropDown";
import TimePiker from "@/src/components/tool/TimePiker";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  optionFoodtype,
  DeliveryorDining,
  optionOffDay,
  optionDayinaDay,
} from "@/src/data/TiifnDetilesOption";

import FoodmenuAdder from "@/src/components/menuAdder/FoodmenuAdder";
import NextButton from "@/src/components/button/NextButton";
import { useNavigation } from "expo-router";

const TiffinDetiles = () => {
  const navigation = useNavigation();
  const [indayTiffin, setIndayTiffin] = useState(null);
  // tiffin time seter
  const [fristTiffinTime, setfristTiffinTime] = useState(null);
  const [secoundTiffinTime, setsecoundTiffinTime] = useState(null);
  const [thirdTiffinTime, setthirdTiffinTime] = useState(null);
  //description
  const [description, setDescription] = useState("");

  // seacrh itm for add menu
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const menuAdder = () => {
    if (searchInput.trim() !== "") {
      // Check if searchInput is not empty
      setSearchResults((prev) => [...prev, searchInput]);
      setSearchInput("");
    }
  };
  const removeItem = (item) => {
    setSearchResults((prev) => prev.filter((i) => i !== item)); // Remove item from the array
  };

  // bootom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Snap points for the bottom sheet
  const snapPoints = useMemo(() => ["100%"], []);
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  useEffect(() => {
    // Ensure BottomSheet is hidden initially
    bottomSheetRef.current?.close();
  }, []);
  const action = () => {
    navigation.navigate("ImageSelect");
  };
  return (
    <SafeAreaView
      className="w-full h-full"
      style={{ backgroundColor: Color.bg }}
    >
      <View
        className="w-full px-3 py-2flex "
        style={{ backgroundColor: Color.bg }}
      >
        <ProfileSubHead title="Tiffin Details" />
      </View>
      <ScrollView className="flex-auto">
        <View className="w-full px-4 flex items-center justify-center mb-28 ">
          <View className="w-full flex items-center justify-center">
           
          </View>
          <View className="w-full mt-10 flex-col gap-7">
            <View className="">
              <Text className="text-gray-700 text-lg font-semibold">
                Tiffin service name
              </Text>
              <TextInput
                className="border-b-2 border-gray-300 py-2"
                placeholder="Service Name"
              />
            </View>
            <View className="">
              <Text className="text-gray-700 text-lg font-semibold">
                per month price
              </Text>
              <TextInput
                className="border-b-2 border-gray-300 py-2"
                placeholder="2500/Mon"
                keyboardType="phone-pad"
              />
            </View>
            <RoomOptionDropDown title="Food Type" option={optionFoodtype} />
            <RoomOptionDropDown title=" Of day " option={optionOffDay} />
            <RoomOptionDropDown
              title="Tiifin in a day"
              option={optionDayinaDay}
              action={setIndayTiffin}
            />
            <RoomOptionDropDown
              title="Delivery or Dining"
              option={DeliveryorDining}
              action={setIndayTiffin}
            />
            {indayTiffin ? (
              <View className="w-full ">
                {indayTiffin.title === "1 Time" ? (
                  <View className="w-full flex-row items-center justify-between rounded-lg p-2">
                    <TimePiker
                      title="Fist Tiffin Time"
                      action={setfristTiffinTime}
                    />
                    <View className="  border-[1px] border-zinc-100 rounded-2xl bg-zinc-200 backdrop-blur-sm flex items-center justify-center  py-2 px-3  ">
                      <Text
                        style={{ color: Color.text }}
                        className="text-lg font-bold"
                      >
                        {fristTiffinTime ? fristTiffinTime : null}
                      </Text>
                    </View>
                  </View>
                ) : indayTiffin.title === "2 Time" ? (
                  <View>
                    <View className="w-full flex-row items-center justify-between rounded-lg p-2">
                      <TimePiker
                        title="Fist Tiffin Time"
                        action={setfristTiffinTime}
                      />
                      <View className="  border-[1px] border-zinc-100 rounded-2xl bg-zinc-200 backdrop-blur-sm flex items-center justify-center  py-2 px-3  ">
                        <Text
                          style={{ color: Color.text }}
                          className="text-lg font-bold"
                        >
                          {fristTiffinTime ? fristTiffinTime : null}
                        </Text>
                      </View>
                    </View>
                    <View className="w-full flex-row items-center justify-between rounded-lg p-2">
                      <TimePiker
                        title="Secound Tiffin Time"
                        action={setsecoundTiffinTime}
                      />
                      <View className="  border-[1px] border-zinc-100 rounded-2xl bg-zinc-200 backdrop-blur-sm flex items-center justify-center  py-2 px-3  ">
                        <Text
                          style={{ color: Color.text }}
                          className="text-lg font-bold"
                        >
                          {secoundTiffinTime ? secoundTiffinTime : null}
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : indayTiffin.title === "3 Time" ? (
                  <View>
                    <View className="w-full flex-row items-center justify-between rounded-lg p-2">
                      <TimePiker
                        title="Fist Tiffin Time"
                        action={setfristTiffinTime}
                      />
                      <View className="  border-[1px] border-zinc-100 rounded-2xl bg-zinc-200 backdrop-blur-sm flex items-center justify-center  py-2 px-3  ">
                        <Text
                          style={{ color: Color.text }}
                          className="text-lg font-bold"
                        >
                          {fristTiffinTime ? fristTiffinTime : null}
                        </Text>
                      </View>
                    </View>
                    <View className="w-full flex-row items-center justify-between rounded-lg p-2">
                      <TimePiker
                        title="Secound Tiffin Time"
                        action={setsecoundTiffinTime}
                      />
                      <View className="  border-[1px] border-zinc-100 rounded-2xl bg-zinc-200 backdrop-blur-sm flex items-center justify-center  py-2 px-3  ">
                        <Text
                          style={{ color: Color.text }}
                          className="text-lg font-bold"
                        >
                          {secoundTiffinTime ? secoundTiffinTime : null}
                        </Text>
                      </View>
                    </View>
                    <View className="w-full flex-row items-center justify-between rounded-lg p-2">
                      <TimePiker
                        title="Thrid Tiffin Time"
                        action={setthirdTiffinTime}
                      />
                      <View className="  border-[1px] border-zinc-100 rounded-2xl bg-zinc-200 backdrop-blur-sm flex items-center justify-center  py-2 px-3  ">
                        <Text
                          style={{ color: Color.text }}
                          className="text-lg font-bold"
                        >
                          {thirdTiffinTime ? thirdTiffinTime : null}
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : null}
              </View>
            ) : null}

            <View className="w-full flex-col items-center justify-center gap-5 ">
              <FoodmenuAdder action={openBottomSheet} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="w-full flex items-center justify-center px-5 absolute bottom-10">
        <NextButton action={action} />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        index={-1} // Initially hidden
      >
        <BottomSheetView style={styles.contentContainer}>
          <View className="w-full px-4 flex-col gap-5">
            {/* Search Input Section */}
            <View className="w-full relative">
              <TextInput
                onChangeText={(text) => setSearchInput(text)}
                value={searchInput}
                className="w-full border-[1px] rounded-full border-[#A0AEC0] px-5 py-3 placeholder:text-zinc-500 placeholder:text-lg text-[#1A202C]"
                placeholder="Search for items..."
              />
              {searchInput.length > 0 && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSearchInput("")}
                  className="absolute right-4 top-3"
                >
                  <Ionicons name="close-circle" size={24} color="#718096" />
                </TouchableOpacity>
              )}
            </View>

            <View className="w-full flex items-center justify-center px-10">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => menuAdder()}
                className="w-full px-4 py-3 rounded-full shadow-md"
                style={{
                  backgroundColor: Color.primary,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Text
                  className="text-lg font-bold text-center"
                  style={{ color: Color.bg }}
                >
                  Add Item
                </Text>
              </TouchableOpacity>
            </View>

            {/* Suggested Items */}
            <View className="w-full  p-4 rounded-lg ">
              <Text className="text-lg font-bold text-[#2D3748] mb-2">
                Listed Items
              </Text>
              <View className="flex gap-2">
                <FlatList
                  data={searchResults.slice().reverse()}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => removeItem(item)}
                        activeOpacity={0.8}
                        className="py-3 px-4 rounded-lg mb-3 bg-[#E2E8F0]"
                      >
                        <Text className="text-[#1A202C] font-semibold">
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
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

export default TiffinDetiles;
