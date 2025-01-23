import React, { useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Color from "@/src/constant/Color";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const RoomIndexHeader = () => {
  const router = useRouter();

  const HeadImage = [
    "https://i.pinimg.com/736x/b2/13/65/b21365c035ff1cfa52edc492affa885b.jpg",
    "https://i.pinimg.com/736x/00/61/60/006160e2c1859ae3efa01b63b47b45ae.jpg",
    "https://i.pinimg.com/736x/01/6e/e4/016ee41e29dbf2358a431465693b7c16.jpg",
    "https://i.pinimg.com/736x/60/4a/e4/604ae4100cc052a708828dce40482170.jpg",
    "https://i.pinimg.com/736x/6e/91/50/6e91504e12130c156b69778fc383d09d.jpg",
  ];

  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get("window").width;
  const scrollInterval = useRef(null);
  const currentIndex = useRef(0);

  // Function to auto-scroll images
  const startAutoScroll = () => {
    scrollInterval.current = setInterval(() => {
      if (scrollViewRef.current) {
        currentIndex.current = (currentIndex.current + 1) % HeadImage.length;
        scrollViewRef.current.scrollTo({
          x: currentIndex.current * screenWidth,
          animated: true,
        });
      }
    }, 20000); // Change image every 5 seconds
  };

  // Cleanup interval on unmount
  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(scrollInterval.current);
  }, []);

  return (
    <View className="w-full h-72 rounded-b-[40px] overflow-hidden relative">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        className="w-full h-full absolute top-0 left-0"
      >
        {HeadImage.map((image, index) => (
          <View
            key={index}
            style={[styles.imageContainer, { width: screenWidth }]}
          >
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
            {/* Overlay for dark effect */}
            <View style={styles.darkOverlay} />
          </View>
        ))}
      </ScrollView>
      <SafeAreaView className="w-full  px-3 flex-col h-full justify-between  pb-3">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center justify-center gap-2">
            <FontAwesome
              name="location-arrow"
              size={24}
              color={Color.primary}
            />
            <Text className="text-white  ">Vasudev Nagar</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/(imp)")}
            className="flex items-center justify-center bg-gray-100/50 w-10 h-10 rounded-full"
          >
            <Text className="text-[#7c73e6] font-bold text-2xl">P</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full">
          <Text className="text-3xl font-extrabold text-white">
            Hey, Pritam! Tell us where you find Room
          </Text>
        </View>
        <View className="w-full flex items-center justify-center px-3">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/(search)")}
            className="w-full gap-5 border-[1px] px-5 text-lg text-white font-bold border-zinc-500 h-20 bg-zinc-600/80 backdrop-blur-3xl rounded-[40px] flex-row items-center"
          >
            <AntDesign name="search1" size={24} color="white" />
            <View className="flex">
              <Text className="text-white">Search rooms</Text>
              <Text className="text-zinc-300">Area name . Categorey</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay with 40% opacity
  },
});

export default RoomIndexHeader;
