import { useContext, createContext, useState, useCallback, useEffect } from "react";
import { get } from "../common/functions/http";

const FurnitureContext = createContext({});
const FurnitureProvider = ({ children }) => {
  const [furnitures, setFurnitures] = useState(null);
  const [furniture, setFurniture] = useState(null);

  const getFurnitures = useCallback(async () => {
    const { data } = await get("/furnitures");
    setFurnitures(data.data);
  }, []);

  const getFurniture = useCallback(async (id) => {
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
        getFurnitures
      }}
    >
      {children}
    </FurnitureContext.Provider>
  );
};

export default FurnitureProvider;

export const useFurnitureContext = () => useContext(FurnitureContext);