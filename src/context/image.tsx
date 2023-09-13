import { createContext, useState } from "react";

interface FuelDataContextType {
  image: File | null; // Definindo image como File ou null
  setImage: React.Dispatch<React.SetStateAction<File | null>>; // Definindo setImage como uma função que aceita File ou null
}

export const ImageContext = createContext<FuelDataContextType>({
  image: null, // Inicializando image como null
  setImage: () => {},
});

export const FuelDataProvider = ({ children }: any) => {
  const [image, setImage] = useState<File | null>(null); // Inicializando image como null

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
