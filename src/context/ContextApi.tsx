import { createContext, useContext, useState } from "react";
const Context = createContext();
export const ContextProvider = ({ children }: any) => {
  // imageFolderShower
  const [imageFolderId, setImageFolderId] = useState(null);

  // page swtcher router name
  const [uploadRoutname, setUploadRoutname] = useState(null);

  // fildes Name
  const [otp, setOtp] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  // store Data
  const [storeProfileData, setStoreProfileData] = useState<any>(null);

  // Content  Loader
  const [profileLoader, setprofileoader] = useState(false);

  return (
    <Context.Provider
      value={{
        imageFolderId,
        setImageFolderId,
        uploadRoutname,
        setUploadRoutname,
        setOtp,
        otp,
        phoneNumber,
        setPhoneNumber,
        storeProfileData,
        setStoreProfileData,
        profileLoader,
        setprofileoader,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const userContext = () => useContext(Context);
