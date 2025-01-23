import { createContext, useContext, useState } from "react";
const Context = createContext();
export const ContextProvider = ({ children }: any) => {
  // imageFolderShower
  const [imageFolderId, setImageFolderId] = useState(null);
  // page swtcher router name
  const [uploadRoutname, setUploadRoutname] = useState(null);
  return (
    <Context.Provider
      value={{
        imageFolderId,
        setImageFolderId,
        uploadRoutname,
        setUploadRoutname,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const userContext = () => useContext(Context);
