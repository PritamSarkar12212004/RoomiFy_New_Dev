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

const DoneScreen = () => {
  const { otp, phoneNumber } = userContext();
  const { user } = useUser();
  const userData = user;
  const router = useRouter();

  // opt and phone data saver
  const otpPhoneFunvc = () => {
    storage.set(Syntax.USERDATA_BY_AUTH, JSON.stringify({ phoneNumber }));
    storage.set(Syntax.AUTHKEY, "true");
    router.replace("/(main)");
  };
  const googleAuthFinc = () => {
    storage.set(
      Syntax.USERDATA_BY_AUTH,
      JSON.stringify({
        email: userData.emailAddresses[0].emailAddress,
        profileImag: userData.externalAccounts[0].imageUrl,
        fristName: userData.externalAccounts[0].firstName,
        lastName: userData.externalAccounts[0].lastName,
      })
    );
    storage.set(Syntax.AUTHKEY, "true");
    router.replace("/(main)");
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
