import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

const useSettingsOptions = () => {
  const router = useRouter();

  const settingsOptions = [
    {
      icon: (
        <MaterialIcons name="admin-panel-settings" size={30} color="#7c73e6" />
      ),
      title: "Profile Information",
      navigate: () => {
        router.push("/(imp)");
      },
    },
    {
      icon: <Entypo name="notification" size={30} color="#7c73e6" />,
      title: "Notification Preferences",
      navigate: () => {
        router.push("/(imp)/Notification");
      },
    },
    {
      icon: <Feather name="upload-cloud" size={30} color="#7c73e6" />,
      title: "Supply Listing",
      navigate: () => {
        console.log("hello");
      },
    },
  ];
  return settingsOptions;
};

export default useSettingsOptions;
