import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import Color from "@/src/constant/Color";
import LootiANimation from "@/src/components/lottiAnimation/LootiANimation";
import Animation from "@/src/constant/Animation";
import Syntax from "@/src/constant/Syntax";
import { userContext } from "@/src/context/ContextApi";
import storage from "@/src/utils/mmkv/storage";
import { useUser } from "@clerk/clerk-expo";
import axiosInstance from "@/src/utils/axios/Axios";
import { Alert } from "react-native";

const DoneScreen = () => {
  const { otp, setOtp, phoneNumber, setPhoneNumber } = userContext();
  const { user } = useUser();
  const userData = user;
  const router = useRouter();

  // opt and phone data saver
  const otpPhoneFunvc = async () => {
    // call to backend  for making the user data in the databsase
    axiosInstance
      .post("/api/login/phone", {
        phoneNumber: parseInt(phoneNumber),
      })
      .then((res) => {
        console.log(res.data.data.userPhoneNumber);
        storage.set(
          Syntax.USERDATA_BY_AUTH,
          JSON.stringify({ phoneNumber: res.data.data.userPhoneNumber })
        );
        storage.set(Syntax.AUTHKEY, "true");
        router.replace("/(main)");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Something went wrong");
        router.replace("/(auth)");
      });
  };
  const googleAuthFinc = () => {
    axiosInstance
      .post("/api/login/google", {
        email: userData.emailAddresses[0].emailAddress,
        profileImag: userData.externalAccounts[0].imageUrl,
        name: userData.fullName,
      })
      .then((res) => {
        storage.set(
          Syntax.USERDATA_BY_AUTH,
          JSON.stringify({
            email: res.data.data.userEmail,
            profileImag: res.data.data.profileImag,
            name: res.data.data.userName,
          })
        );
        storage.set(Syntax.AUTHKEY, "true");
        router.replace("/(main)");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Something went wrong");
        router.replace("/(auth)");
      });
  };

  const authAdder = async () => {
    if (otp && phoneNumber) {
      otpPhoneFunvc();
    }
    googleAuthFinc();
  };

  useEffect(() => {
    setTimeout(() => {
      authAdder();
    }, 1500);
    return () => {
      setPhoneNumber(null);
      setOtp(null);
    };
  }, []);

  return (
    <View
      className="w-full h-full  flex justify-center gap-10 items-center"
      style={{ backgroundColor: Color.bg }}
    >
      <View className="w-full  flex items-center justify-center">
        <LootiANimation
          path={Animation.SuccessAnimation}
          width={350}
          height={300}
          bgColor={"white"}
        />
      </View>
      <Text className="text-center text-lg font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        exercitationem itaque repudiandae eos, facilis voluptatibus similique
        soluta optio cum, cumque eligendi ullam, error deserunt unde non
        praesentium! Expedita, laboriosam amet.
      </Text>
    </View>
  );
};

export default DoneScreen;
