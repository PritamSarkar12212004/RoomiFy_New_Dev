
import * as MediaLibrary from "expo-media-library";

const useFolderSeprateImage = ({ setImageList }: any) => {
  const fetchAllPhotosFromAlbum = async (albumId) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission not granted!");
        return [];
      }

      let allPhotos = [];
      let hasNextPage = true;
      let after = null;

      // Loop to fetch all assets from the album
      while (hasNextPage) {
        const assets = await MediaLibrary.getAssetsAsync({
          album: albumId, // Specific album ID
          mediaType: ["photo"], // Fetch only photos
          first: 100, // Fetch maximum 100 assets per call
          after, // Cursor for pagination
        });

        allPhotos = [...allPhotos, ...assets.assets]; // Append fetched assets to the list
        hasNextPage = assets.hasNextPage; // Check if more assets are available
        after = assets.endCursor; // Set cursor for the next page
      }

      setImageList(allPhotos);
    } catch (error) {
      console.error("Error fetching photos:", error);
      return [];
    }
  };
  return fetchAllPhotosFromAlbum;
};

export default useFolderSeprateImage;
