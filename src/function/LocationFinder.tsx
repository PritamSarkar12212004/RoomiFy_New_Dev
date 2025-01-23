import * as Location from "expo-location";

const locationChaker = async (router: any, routePath: any) => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return;
  }

  const isLocationEnabled = await Location.hasServicesEnabledAsync();
  if (isLocationEnabled) {
    router.replace(routePath.allowPath);
  } else {
    router.replace(routePath.deneyPath);
  }
};

export default locationChaker;
