import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import NextButton from "@/src/components/button/NextButton";
import { useNavigation } from "expo-router";
import Color from "@/src/constant/Color";

const Index = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const PhoneValidation = (number: string) => {
    const regex = /^[0-9]{10}$/;
    setIsValid(regex.test(number));
    setPhoneNumber(number);
  };

  const action = () => {
    if (isValid && phoneNumber.length === 10) {
      navigation.navigate("VariFyOtp");
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: Color.bg }}>
      <View className="w-full h-full px-4 pb-5">
        <View className="w-full flex-auto pt-10">
          <View className="w-full">
            <Text className="text-5xl font-extrabold leading-tight">
              <Text className=" font-extrabold" style={{ color: Color.text }}>
                S
              </Text>
              ign in to your
            </Text>
            <Text className="text-5xl font-extrabold">account</Text>
          </View>
          <View className="w-full mt-2">
            <Text className=" font-semibold" style={{ color: Color.norNext }}>
              Access your Account by Phone number & Google Account
            </Text>
          </View>
          <View className="w-full mt-3 relative">
            <View className="absolute top-9 left-3">
              <FontAwesome name="phone" size={24} color="#7c73e6" />
            </View>

            <TextInput
              value={phoneNumber}
              onChangeText={PhoneValidation}
              keyboardType="phone-pad"
              placeholder="Phone Number"
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${
                isValid ? "border-[#7d73e6cc]" : "border-red-500"
              }`}
            />
            {!isValid && (
              <Text className="text-red-500 mt-2">
                Please enter a valid 10-digit phone number.
              </Text>
            )}
          </View>
        </View>
        <NextButton action={action} />
      </View>
    </SafeAreaView>
  );
};

export default Index;
