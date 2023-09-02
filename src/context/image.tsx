import { createContext, useState } from "react";

interface FuelDataContextType {
  image: Record<string, any>; // Usar um tipo Record para representar um objeto vazio
  setImage: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

export const ImageContext = createContext<FuelDataContextType>({
  image: {},
  setImage: () => {},
});

export const FuelDataProvider = ({ children }: any) => {
  const [image, setImage] = useState<Record<string, any>>({}); // Inicializar com um objeto vazio

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
