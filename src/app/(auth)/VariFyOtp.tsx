import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadGoback from "@/src/components/button/HeadGoback";
import { OtpInput } from "react-native-otp-entry";
import NextButton from "@/src/components/button/NextButton";
import { useNavigation } from "expo-router";
import { userContext } from "@/src/context/ContextApi";

const VariFyOtp = () => {
  const { otp } = userContext();
  const navigate = useNavigation();
  const [otpInput, setOptInput] = useState("");
  const [error, setError] = useState("");

  const action = () => {
    if (optValidation(otpInput)) {
      if (otpInput == otp) {
        navigate.navigate("DoneScreen");
      } else {
        setError("Invalid OTP");
      }
    }
  };

  const optValidation = (num) => {
    if (num.length !== 4 || !/^\d+$/.test(num)) {
      setError("OTP must be a 4-digit number.");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="w-full h-full px-4 pb-5">
        <HeadGoback />
        <View className="w-full flex-auto pt-10">
          <Text style={styles.title}>
            <Text style={styles.highlight}>V</Text>arify your phone number by
            entering OTP
          </Text>
          <View style={styles.otpContainer}>
            <OtpInput
              numberOfDigits={4}
              focusColor="red"
              autoFocus={false}
              hideStick={true}
              onTextChange={(num) => {
                setOptInput(num);
                optValidation(num);
              }}
              placeholder="****"
              blurOnFilled={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              focusStickBlinkingDuration={500}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              theme={{
                containerStyle: styles.otpContainerStyle,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusStickStyle: styles.focusStick,
                focusedPinCodeContainerStyle: styles.focusedPinCodeContainer,
                placeholderTextStyle: styles.placeholderText,
                filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
              }}
            />
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
        <NextButton action={action} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
  },
  highlight: {
    fontSize: 40,
    color: "#7c73e6",
  },
  otpContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  otpContainerStyle: {},
  pinCodeContainer: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    padding: 10,
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  pinCodeText: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
  },
  focusStick: {
    backgroundColor: "#7c73e6",
  },
  focusedPinCodeContainer: {
    borderColor: "",
  },
  placeholderText: {
    color: "black",
  },
  filledPinCodeContainer: {
    borderColor: "#7c73e6",
    backgroundColor: "white",
  },
  disabledPinCodeContainer: {
    borderColor: "white",
    backgroundColor: "white",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

export default VariFyOtp;
