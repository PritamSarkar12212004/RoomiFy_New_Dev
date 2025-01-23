import { View, Text } from "react-native";
import React, { useRef } from "react";
import { Platform } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useForeground,
} from "react-native-google-mobile-ads";
const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : "ca-app-pub-6357576702874785~7796983596";

const BarrerAdd = () => {
  const bannerRef = useRef<BannerAd>(null);
  useForeground(() => {
    Platform.OS === "ios" && bannerRef.current?.load();
  });
  return (
    <BannerAd
      ref={bannerRef}
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
  );
};

export default BarrerAdd;
