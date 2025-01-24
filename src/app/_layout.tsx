import "../../global.css";
import { tokenCache } from "../utils/ClearckAuth/createTokenCache";
import { StatusBar } from "react-native";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import React from "react";

import { Stack } from "expo-router";
import { ContextProvider } from "../context/ContextApi";
const _layout = () => {
  return (
    <>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey="pk_test_c2luY2VyZS1lc2NhcmdvdC01Ni5jbGVyay5hY2NvdW50cy5kZXYk"
      >
        <ClerkLoaded>
          <ContextProvider>
            <MainLayout />
          </ContextProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </>
  );
};
const MainLayout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default _layout;
