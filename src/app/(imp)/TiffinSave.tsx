import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect, useRouter } from "expo-router";

const TiffinSave = () => {
  const router = useRouter();
  const routePath = {
    allowPath: "/(imp)/TiffinSave",
    deneyPath: "/(other)",
  };
 
  return (
    <View>
      <Text>TiffinSave</Text>
    </View>
  );
};

export default TiffinSave;
