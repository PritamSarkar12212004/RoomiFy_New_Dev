import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SaveChangeButton from "@/src/components/button/SaveChangeButton";
import { userContext } from "@/src/context/ContextApi";
import { ScrollView } from "react-native";
import useProfileUpdater from "@/src/hook/useProfileUpdater";


const ProfileEdit = () => {
  const { storeProfileData } = userContext();
  const { ProfileUpdaterFunc } = useProfileUpdater();

  const userId = storeProfileData.id;
  console.log(storeProfileData);
  const [loading, setloading] = useState(false);
  const [name, setName] = React.useState(
    storeProfileData.name ? storeProfileData.name : "User"
  );
  const [email, setEmail] = React.useState(
    storeProfileData.email ? storeProfileData.email : "xyz@gmail.com"
  );
  const [phone, setPhone] = React.useState(
    storeProfileData.phoneNumber
      ? storeProfileData.phoneNumber.toString()
      : null
  );
  const [profileImag, setprofileImag] = useState(
    storeProfileData.profileImag
      ? storeProfileData.profileImag
      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );

  const action = () => {
    ProfileUpdaterFunc({ email, phone, name, setloading, userId });
  };

  return (
    <SafeAreaView className="w-full h-full  bg-white relative">
      <ScrollView className="w-full h-full">
        <View className="w-full bg-white px-4 py-2">
          <ProfileSubHead title="Profile Information" />
        </View>
        <View className="flex-auto flex-col justify-between pb- mt-10 gap-4 px-4">
          <View className="w-full">
            <View className="w-full flex items-center justify-center">
              <View className="h-48 w-48 rounded-full  relative">
                <TouchableOpacity
                  className="absolute bottom-5 right-3 z-10 h-12 w-12 bg-white rounded-full flex items-center justify-center"
                  activeOpacity={0.8}
                >
                  <FontAwesome5 name="edit" size={24} color="#7c73e6" />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: profileImag,
                  }}
                  className="h-48 w-48 rounded-full"
                  resizeMode="cover"
                />
              </View>
            </View>
            <View className="w-full flex-col gap-5">
              <View className="w-full flex-col gap-2">
                <Text className="text-xl font-bold text-zinc-600">Name</Text>
                <TextInput
                  onChangeText={(text) => setName(text)}
                  placeholder={name}
                  className="text-lg border-[1px] border-zinc-100 px-5 h-14 font-semibold  tracking-widest   leading-loose   rounded-2xl"
                />
              </View>
              <View className="w-full flex-col gap-2">
                <Text className="text-xl font-bold text-zinc-600">
                  Phone Number
                </Text>
                <TextInput
                  onChangeText={(phone) => setPhone(phone)}
                  keyboardType="number-pad"
                  placeholder={phone}
                  className="text-lg border-[1px] border-zinc-100 px-5 h-14 font-semibold  tracking-widest   leading-loose   rounded-2xl"
                />
              </View>
              <View className="w-full flex-col gap-2">
                <Text className="text-xl font-bold text-zinc-600">Email</Text>
                <TextInput
                  placeholder={email}
                  onChangeText={(email) => setEmail(email)}
                  className="text-lg border-[1px] border-zinc-100 px-5 h-14 font-semibold  tracking-widest   leading-loose   rounded-2xl"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="w-full flex absolute bottom-5 items-center justify-center px-10">
        <SaveChangeButton action={action} loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileEdit;
