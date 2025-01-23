import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/src/constant/Color";
import ProfileSubHead from "@/src/components/header/ProfileSubHead";
import { userContext } from "@/src/context/ContextApi";
import useFolderSeprateImage from "@/src/hook/useFolderSeprateImage";
import { ScrollView } from "react-native-gesture-handler";

import Modal from "react-native-modal";
import UploadButton from "@/src/components/button/UploadButton";

const ShowPhotos = () => {
  const [imageSellected, setImageSelected] = useState([]);
  // image modal
  const [showImageModal, setShowImageModal] = useState([]);
  const [visible, setIsVisible] = useState(false);
  const showModalAction = (item: any) => {
    setShowImageModal([]);
    setShowImageModal(item.uri);
    setIsVisible(true);
  };
  const { imageFolderId } = userContext();
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchAllPhotosFromAlbum = useFolderSeprateImage({ setImageList });
    const imageFetch = async () => {
      await fetchAllPhotosFromAlbum(imageFolderId);
    };
    imageFetch();
  }, []);

  return (
    <SafeAreaView
      className="w-full h-full"
      style={{ backgroundColor: Color.bg }}
    >
      <View className="w-full px-3 py-2" style={{ backgroundColor: Color.bg }}>
        <ProfileSubHead title="Folder Image" />
      </View>
      <ScrollView className="flex-auto">
        <View className="w-full px-4 flex items-center justify-center mb-28">
          <View className="w-full flex-row flex-wrap items-center justify-between gap-4">
            {imageList.map((item, index) => {
              const isSelected = imageSellected.includes(item.uri);
              const isMainImage = imageSellected[0] === item.uri; // Check if it's the first selected image

              return (
                <TouchableOpacity
                  onPress={() => {
                    if (isSelected) {
                      // Remove the image from the selected array
                      setImageSelected((prev) =>
                        prev.filter((imageUri) => imageUri !== item.uri)
                      );
                    } else {
                      // Add the image to the selected array
                      setImageSelected((prev) => [...prev, item.uri]);
                    }
                  }}
                  onLongPress={() => showModalAction(item)}
                  activeOpacity={0.8}
                  key={index}
                  className="h-32 w-32 relative"
                >
                  <Image
                    source={{ uri: item.uri }}
                    className="h-full w-full rounded-xl"
                  />
                  {isSelected && (
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                      }}
                    >
                      {isMainImage ? (
                        <Text
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                          }}
                        >
                          Main Image
                        </Text>
                      ) : (
                        <Text
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                          }}
                        >
                          ✓
                        </Text>
                      )}
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <Modal
          isVisible={visible}
          onBackdropPress={() => setIsVisible(false)}
          onBackButtonPress={() => setIsVisible(false)}
        >
          <View>
            <Image
              source={{
                uri: showImageModal,
              }}
              resizeMode="contain"
              className="w-full h-full rounded-3xl"
            />
          </View>
        </Modal>
      </ScrollView>
      <View className="w-fill flex px-7  absolute bottom-5 items-center justify-center">
        <UploadButton />
      </View>
    </SafeAreaView>
  );
};

export default ShowPhotos;
