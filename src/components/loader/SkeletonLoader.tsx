import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";

const SkeletonLoader = () => {
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();
  }, [shimmerAnimation]);

  const shimmerStyle = {
    opacity: shimmerAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.3, 1, 0.3],
    }),
  };

  return (
    <View className="w-full h-full bg-white pb-20">
      {/* Top Section - Circles */}
      <View className="flex-auto bg-white pt-2 px-2">
        <View className="w-full flex-row flex-wrap justify-center items-center gap-2">
          {[...Array(8)].map((_, index) => (
            <Animated.View
              key={index}
              style={[shimmerStyle, styles.circle]}
            />
          ))}
        </View>

        {/* Bottom Section - Rectangles */}
        <View className="w-full mt-5 flex-col gap-4">
          {[...Array(4)].map((_, index) => (
            <Animated.View
              key={index}
              style={[shimmerStyle, styles.rectangle]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 96, // h-24
    width: 96, // w-24
    backgroundColor: "#e0e0e0", // Skeleton gray
    borderRadius: 48, // Fully rounded
  },
  rectangle: {
    width: "100%",
    height: 320, // h-80
    backgroundColor: "#e0e0e0", // Skeleton gray
    borderRadius: 20, // rounded-3xl
  },
});

export default SkeletonLoader;
