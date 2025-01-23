import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import { SafeAreaView } from "react-native-safe-area-context";

const FAQ = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={"#c4c1e0"} />
      <SafeAreaView className="w-full h-full gap-10 bg-white">
        <View className="w-full bg-white px-4 pt-2">
          <ProfileSubHead title="FAQ" />
        </View>
        <ScrollView>
          <View className="flex-auto flex-col  gap-5 px-4 pb-5">
            <View className="w-full">
              <Text className="text-lg font-semibold">
                What is the purpose of this app?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                This app is designed to help you find and book services from
                local service providers in your area.
              </Text>
            </View>
            <View className="w-full">
              <Text className="text-lg font-semibold">
                How do I find a service provider?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                To find a service provider, you can use the search bar to search
                for a specific service or browse through the categories to find
                a service that fits your needs.
              </Text>
            </View>
            <View className="w-full">
              <Text className="text-lg font-semibold">
                How do I book a service?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                To book a service, simply click on the "Book Now" button next to
                the service you want to book.
              </Text>
            </View>
            <View className="w-full">
              <Text className="text-lg font-semibold">
                Are there any additional charges for using the app?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                Roomify does not charge any additional fees for booking.
                However, room owners may include specific charges such as
                security deposits, cleaning fees, etc.
              </Text>
            </View>
            <View className="w-full">
              <Text className="text-lg font-semibold">
                What facilities are included in the rooms?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                Facilities vary depending on the room type and owner. Common
                amenities include WiFi, parking, furniture, and 24/7 water
                supply. Please check the details for each room before booking.
              </Text>
            </View>
            <View className="w-full">
              <Text className="text-lg font-semibold">
                How does the tiffin service work?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                Simply select a tiffin service provider in your area, choose
                your meal plan (daily, weekly, or monthly), and place your
                order. Delivery details will be shared with you upon
                confirmation.
              </Text>
            </View>
            <View className="w-full">
              <Text className="text-lg font-semibold">
                Can I customize my tiffin meals?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                Yes, many tiffin providers offer customizable meal options. You
                can specify your preferences while placing your order.
              </Text>
            </View>
            <View className="w-full">
              <Text className="text-lg font-semibold">
                Is there a refund policy for tiffin services?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                Refunds depend on the provider's policy. Please review their
                cancellation and refund policy before placing your order.
              </Text>
            </View>
            <View className="w-full">
              <Text className="text-lg font-semibold">
                Are the meals vegetarian or non-vegetarian?
              </Text>
              <Text className="text-sm font-medium text-zinc-500">
                Roomify offers both vegetarian and non-vegetarian meal options.
                You can filter the tiffin services based on your dietary
                preferences.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default FAQ;
