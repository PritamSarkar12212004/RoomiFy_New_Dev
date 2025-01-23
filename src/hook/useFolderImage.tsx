import { View, Text } from "react-native";
import React from "react";
import * as MediaLibrary from "expo-media-library";

const useFolderImage = ({ setAlbums }: any) => {
  const fetchAlbumsWithThumbnails = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      // Get all albums
      const albumList = await MediaLibrary.getAlbumsAsync();
      // Fetch the first asset (thumbnail) for each album
      const albumsWithThumbnails = await Promise.all(
        albumList.map(async (album) => {
          const assets = await MediaLibrary.getAssetsAsync({
            album: album.id,
            first: 1, // Fetch only the first image/video
            mediaType: ["photo"], // Only photos
          });

          return {
            ...album,
            thumbnail: assets.assets.length > 0 ? assets.assets[0].uri : null, // Thumbnail URI
          };
        })
      );

      setAlbums(albumsWithThumbnails);
    } else {
      console.log("Permission not granted!");
      return [];
    }
  };
  return fetchAlbumsWithThumbnails;
};

export default useFolderImage;
