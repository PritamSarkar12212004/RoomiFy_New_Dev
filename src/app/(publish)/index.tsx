import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import Color from "@/src/constant/Color";
import NextButton from "@/src/components/button/NextButton";
import { useNavigation } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
import { userContext } from "@/src/context/ContextApi";
import RouteName from "@/src/constant/RouterName";
import LootiANimation from "@/src/components/lottiAnimation/LootiANimation";
import Animation from "@/src/constant/Animation";

const index = () => {
  const { uploadRoutname } = userContext();
  const navigate = useNavigation();
  const action = () => {
    if (uploadRoutname === RouteName.RoomUploader) {
      navigate.navigate("RoomDetiles");
    } else {
      navigate.navigate("TiffinDetiles");
    }
  };

  return (
    <SafeAreaView
      className="w-full h-full relative"
      style={{ backgroundColor: Color.bg }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding" // Adjust behavior for keyboard interactions
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="w-full px-4 py-2">
              <ProfileSubHead title="Owner Details" />

              {/* Lottie Animation */}
              <View className="w-full flex items-center justify-center mt-5">
                <View className="w-full  flex items-center justify-center">
                  <LootiANimation
                    path={Animation.OwnerAnimation}
                    width={350}
                    height={300}
                    bgColor={"white"}
                  />
                </View>
              </View>

              {/* Form Fields */}
              <View className="mt-10">
                {/* Owner Name */}
                <View className="mb-7">
                  <Text className="text-gray-700 text-lg font-semibold">
                    Owner Name
                  </Text>
                  <TextInput
                    className="border-b-2 border-gray-300 py-2"
                    placeholder="Owner Name"
                  />
                </View>

                {/* Full Address */}
                <View className="mb-7">
                  <Text className="text-gray-700 text-lg font-semibold">
                    Full Address
                  </Text>
                  <TextInput
                    className="border-b-2 border-gray-300 py-2"
                    placeholder="Full Address"
                  />
                </View>

                {/* Phone Number */}
                <View className="mb-7">
                  <Text className="text-gray-700 text-lg font-semibold">
                    Phone Number
                  </Text>
                  <TextInput
                    className="border-b-2 border-gray-300 py-2"
                    placeholder="Phone Number"
                    keyboardType="number-pad"
                  />
                </View>

                {/* Whatsapp Number (Optional) */}
                <View className="mb-7">
                  <Text className="text-gray-700 text-lg font-semibold">
                    Whatsapp Number (Optional)
                  </Text>
                  <TextInput
                    className="border-b-2 border-gray-300 py-2"
                    placeholder="Whatsapp Number"
                    keyboardType="number-pad"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>

        {/* Next Button */}
        <View className="w-full flex items-center justify-center px-5 absolute bottom-10">
          <NextButton action={action} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;
