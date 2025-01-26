import storage from "../utils/mmkv/storage";
import Syntax from "../constant/Syntax";
import { useAuth } from "@clerk/clerk-expo";

const userLogout = () => {
    console.log("logout");
  const { signOut } = useAuth();
  // for google auth logout
  signOut();
  // mmvk logout
  storage.delete(Syntax.AUTHKEY);
  storage.delete(Syntax.USERDATA_BY_PHONE);
};

export default userLogout;
