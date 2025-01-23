import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ShowPageHeader from "@/src/components/header/ShowPageHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import ImageRenderer from "@/src/components/card/ImageRenderer";
import { useNavigation } from "expo-router";
import ImageViewScreen from "@/src/components/viewScreen/ImageViewScreen";

const index = () => {
  const navigation = useNavigation();
  const [visible, setIsVisible] = useState(false);
  const imagesList = [
    {
      uri: "https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [images, setimages] = useState(imagesList);
  const [imageIndexShow, setimageIndexShow] = useState(0);
  const showImage = (index: any) => {
    setimageIndexShow(index);
    setIsVisible(true);
  };
  const action = () => {
    navigation.navigate("ShowImagwGallery");
  };
  return (
    <View className="w-full h-full relative bg-white ">
      <ScrollView className="flex-1 bg-white relative">
        {/* Header Section */}
        <View className="relative  h-full bg-white mb-28">
          <ShowPageHeader />
          <View className="w-full flex-col items-center relative">
            {/* Hero Image */}
            <ImageViewScreen
              setIsVisible={setIsVisible}
              visible={visible}
              images={images}
              imageIndexShow={imageIndexShow}
            />
            <TouchableOpacity
              className="w-full"
              activeOpacity={0.8}
              onPress={() => showImage(0)}
            >
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="w-full h-96 rounded-b-3xl shadow-xl"
                resizeMode="cover"
              />
            </TouchableOpacity>
            {/* Rating Badge */}
            <View className="absolute bottom-24 bg-white rounded-full px-6 py-2 flex-row items-center shadow-lg">
              <Text className="text-xl font-bold text-gray-800">4.9</Text>
              <AntDesign
                name="star"
                size={24}
                color="orange"
                className="ml-2"
              />
            </View>
          </View>

          {/* Content Section */}
          <View className="w-full bg-white rounded-t-3xl -mt-16 p-6 ">
            {/* Title and Price */}
            <View className="flex-row justify-between items-center">
              <Text className="text-3xl font-bold text-gray-800">
                Sarkar Home
              </Text>
              <View className="flex-row items-baseline">
                <Text className="text-2xl font-bold text-gray-900">₹2500</Text>
                <Text className="text-lg text-gray-500 ml-2">/month</Text>
              </View>
            </View>

            {/* Description */}
            <View className="mt-5">
              <Text className="text-xl font-semibold text-gray-700">
                Description
              </Text>
              <Text className="text-lg text-gray-600 mt-2 leading-7">
                A peaceful and well-furnished home located in the heart of the
                city. Perfect for both students and professionals. Offers all
                basic amenities to ensure a comfortable living experience.
              </Text>
            </View>

            {/* Gallery Section */}
            <View className="mt-8">
              <Text className="text-xl font-semibold text-gray-700 mb-3">
                Gallery
              </Text>
              <ImageRenderer action={action} />
            </View>

            {/* Facilities Section */}
            <View className="mt-10">
              <Text className="text-xl font-semibold text-gray-700 mb-4">
                Facilities
              </Text>
              <View className="flex-row flex-wrap gap-4">
                {/* Facility Item */}
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Free Wi-Fi</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Parking</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Independant</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Water</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Boyes</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Free Wi-Fi</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Parking</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Independant</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Water</Text>
                </View>
                <View className="bg-gray-100 py-2 px-4 rounded-3xl flex-row items-center gap-3 shadow-sm">
                  <Text className="text-lg text-gray-800">Boyes</Text>
                </View>
              </View>
            </View>

            {/* Map Section */}
            <View className="mt-10">
              <View className="w-full ">
                <Text className="text-3xl font-thin">Detiles</Text>
              </View>
              <View className="w-full flex mt-2 gap-3 pxl-2">
                <View className="w-full flex">
                  <Text className="text-lg font-semibold">
                    Room For - Boyes
                  </Text>
                </View>
                <View className="w-full flex">
                  <Text className="text-lg font-semibold">
                    Type - Independent
                  </Text>
                </View>
                <View className="w-full flex">
                  <Text className="text-lg font-semibold">
                    Electricity - Not Included Boyes
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="w-full absolute  bottom-10 px-10">
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-full flex items-center justify-center py-5 rounded-3xl bg-[#7c73e6]"
        >
          <Text className="text-xl font-bold text-white">Call Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
