import Syntax from "../constant/Syntax";
import { userContext } from "../context/ContextApi";
import axiosInstance from "../utils/axios/Axios";
import storage from "../utils/mmkv/storage";

const useProfileUpdater = () => {
  const { profileLoader, setprofileoader } = userContext();
  const ProfileUpdaterFunc = ({
    email,
    phone,
    name,
    setloading,
    userId,
  }: any) => {
    setloading(true);
    axiosInstance
      .post("/api/update/userInfo", {
        email: email,
        name: name,
        phoneNumber: phone,
        id: userId,
      })
      .then((res) => {
        setloading(false);
        console.log(res.data.updateData);
        storage.set(
          Syntax.USERDATA_BY_AUTH,
          JSON.stringify({
            email: res.data.updateData.email,
            profileImag: res.data.updateData.profileImag,
            name: res.data.updateData.name,
            phoneNumber: res.data.updateData.phoneNumber,
            id: userId,
          })
        );
        setprofileoader(!profileLoader);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
        setprofileoader(!profileLoader);
      });
  };
  return {ProfileUpdaterFunc};
};

export default useProfileUpdater;
