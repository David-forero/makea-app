import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";
import { get } from "../common/functions/http";

interface IFurnitureContext {
  furnitures: any;
  getFurniture: any;
  furniture: any;
}

interface IFornitureProviderProps {
  children: ReactNode;
}

const FurnitureContext = createContext<IFurnitureContext>(
  {} as IFurnitureContext
);

const FurnitureProvider = ({ children }: IFornitureProviderProps) => {
  const [furnitures, setFurnitures] = useState(null);
  const [furniture, setFurniture] = useState(null);

  const getFurnitures = useCallback(async () => {
    const { data } = await get("/furnitures");
    setFurnitures(data.data);
  }, []);

  const getFurniture = useCallback(async (id: string) => {
    const { data } = await get(`/furnitures/${id}`);
    setFurniture(data.data);
  }, []);

  useEffect(() => {
    getFurnitures();
  }, []);

  return (
    <FurnitureContext.Provider
      value={{
        /*🔻  Variables 🔻*/
        furnitures,
        furniture,
        /*🔻  Funciones 🔻*/
        getFurniture,
      }}
    >
      {children}
    </FurnitureContext.Provider>
  );
};

export default FurnitureProvider;

export const useFurnitureContext = () => useContext(FurnitureContext);
