import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation, useRouter } from "expo-router";

const useSettingsOptions = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const settingsOptions = [
    {
      icon: (
        <MaterialIcons name="admin-panel-settings" size={30} color="#7c73e6" />
      ),
      title: "Profile Information",
      navigate: () => {
        navigation.navigate("ProfileEdit");
      },
    },
    {
      icon: <Entypo name="notification" size={30} color="#7c73e6" />,
      title: "Notification Preferences",
      navigate: () => {
        navigation.navigate("Notification");
      },
    },
    {
      icon: <Feather name="upload-cloud" size={30} color="#7c73e6" />,
      title: "Supply Listing",
      navigate: () => {
        router.push("/(supplayList)");
      },
    },
  ];
  return settingsOptions;
};

export default useSettingsOptions;
