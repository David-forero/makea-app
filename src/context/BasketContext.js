import { useContext, createContext, useState, useCallback, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  const addToBasket = useCallback((item) => {
    console.log(item);
    setItems([...items, item]);
  }, [items]);

  const removeFromBasket = useCallback((idItem) => {
    const index = items.findIndex((basketItem) => basketItem.id === idItem);
    let newBasket = [...items];

    if (index >= 0) {
      newBasket.splice(index, 1);
    }

    setItems(newBasket);
  }, [items]);

  useEffect(() => {
    setTotal(
      items.reduce((total, item) => {
        return total + item.price;
      }, 0)
    );
  }, [items]);

  return (
    <BasketContext.Provider
      value={{
        total,
        items,
        addToBasket,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

export const useBasketContext = () => useContext(BasketContext);
