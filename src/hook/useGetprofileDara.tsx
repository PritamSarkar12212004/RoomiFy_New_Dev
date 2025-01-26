import { userContext } from "../context/ContextApi";
import storage from "../utils/mmkv/storage";
import Syntax from "../constant/Syntax";

const useGetprofileDara = () => {
  const { setStoreProfileData } = userContext();
  const getProfileData = () => {
    const jsonData = storage.getString(Syntax.USERDATA_BY_AUTH);
    const data = JSON.parse(jsonData);
    setStoreProfileData(data);
  };
  return { getProfileData };
};

export default useGetprofileDara;
