import * as MediaLibrary from "expo-media-library";

const usePhotosPermission = ({ setHasPermission, setImages }: any) => {
  const getPermission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      setHasPermission(true);
      fetchImages();
    } else {
      alert("Permission denied!");
    }
  };
  const fetchImages = async () => {
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: "photo",
    });
    setImages(media.assets);
  };
  return getPermission;
};

export default usePhotosPermission;
