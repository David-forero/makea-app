import { useContext, createContext, useState, useCallback, ReactNode } from "react";
import { post } from "../common/functions/http";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
  import.meta.env.STRIPE_SECRET_KEY || ''
);


const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const createOrder = useCallback(async (items, email) => {
    const stripe = await stripePromise;

    const { data } = await post('/create-checkout-session', {
      items: items,
      email
    });

    const result = await stripe.redirectToCheckout({
      sessionId: data.data.id
    });

    if (result.error) {
      alert(result.error.message);
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        /*🔻  Variables 🔻*/
        showCheckout,
        setShowCheckout,
        /*🔻  Funciones 🔻*/
        createOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const useOrderContext = () => useContext(OrderContext);
