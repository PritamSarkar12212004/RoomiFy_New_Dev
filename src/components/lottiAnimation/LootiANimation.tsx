import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const LootiANimation = ({ width, height, path, bgColor }: any) => {
  const animation = useRef<LottieView>(null);

  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
      }}
      // Find more Lottie files at https://lottiefiles.com/featured
      source={path}
    />
  );
};

export default LootiANimation;
