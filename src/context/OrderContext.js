import { useContext, createContext, useState, useCallback, ReactNode } from "react";
import { post } from "../common/functions/http";
import { useStripe } from "@stripe/stripe-react-native";
// import { loadStripe } from '@stripe/stripe-js';
import Constants from "expo-constants";

// const stripePromise = loadStripe(
//   process.env.STRIPE_PUBLIC_KEY || '',
//   process.env.STRIPE_SECRET_KEY || ''
// );


const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const stripe = useStripe();

  const createOrder = async (items, email) => {
    // const stripe = await stripePromise;

    const { data } = await post('/create-checkout-session', {
      items: items,
      email
    });


    const initSheet = await stripe.initPaymentSheet({
      merchantDisplayName: 'Makea',
      setupIntentClientSecret: data.data.client_secret.client_secret
    });

    console.log('initSheet =====>', initSheet);

    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret: data.data.client_secret.client_secret,
    });

    if (presentSheet.error) {
      console.error(presentSheet.error);
      return Alert.alert(presentSheet.error.message);
    }

    console.log(presentSheet);
  }




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
