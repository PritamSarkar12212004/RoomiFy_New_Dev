import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import useFolderImage from "@/src/hook/useFolderImage";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import Color from "@/src/constant/Color";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import { userContext } from "@/src/context/ContextApi";
const FolderImage = () => {
  const { setImageFolderId } = userContext();

  const navigation = useNavigation();
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchAlbumsWithThumbnails = useFolderImage({ setAlbums });
    fetchAlbumsWithThumbnails();
  }, []);
  const folderPhotosShowAction = (id) => {
    navigation.navigate("ShowPhhotos");
    setImageFolderId(id);
  };
  return (
    <SafeAreaView
      className="w-full h-full"
      style={{ backgroundColor: Color.bg }}
    >
      <View
        className="w-full px-3 py-2flex "
        style={{ backgroundColor: Color.bg }}
      >
        <ProfileSubHead title="Image Upload" />
      </View>
      <ScrollView className="flex-auto" showsVerticalScrollIndicator={false}>
        <View className="w-full px-4 flex items-center justify-center mb-28">
          <View className="w-full flex-row  flex-wrap gap-4 mt-10">
            {albums.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    folderPhotosShowAction(item.id);
                  }}
                  activeOpacity={0.8}
                  key={index}
                  className=" h-32 w-32 mb-10 flex items-center justify-center gap-1"
                >
                  {item.thumbnail ? (
                    <Image
                      source={{ uri: item.thumbnail }}
                      className="h-full w-full rounded-xl"
                    />
                  ) : (
                    <View className="w-full h-full bg-zinc-300 rounded-3xl flex items-center justify-center">
                      <MaterialIcons name="image-search" size={30} gray />
                    </View>
                  )}
                  <Text
                    numberOfLines={1}
                    className="text-center text-sm text-zinc-700 "
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FolderImage;
