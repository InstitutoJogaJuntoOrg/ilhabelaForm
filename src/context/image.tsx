import { createContext, useState } from "react";

interface FuelDataContextType {
  image: File[];
  setImage: React.Dispatch<React.SetStateAction<[]>>;
}

export const ImageContext = createContext<FuelDataContextType>({
  image: [],
  setImage: () => {},
});

export const FuelDataProvider = ({ children }: any) => {
  const [image, setImage] = useState<[] | any>([]);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
