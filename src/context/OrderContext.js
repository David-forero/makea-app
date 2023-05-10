import { useContext, createContext, useState, useCallback, ReactNode } from "react";
import { get, post } from "../common/functions/http";
import { useStripe } from "@stripe/stripe-react-native";
import Constants from "expo-constants";
import { useBasketContext } from "./BasketContext";


const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const stripe = useStripe();
  const [orders, setOrders] = useState(null);
  const {total, setItems} = useBasketContext();


  const createOrder = async (items, email, navigation, setLoading) => {
    // const stripe = await stripePromise;
    console.log(email);
    const { data } = await post('/create-checkout-session', {
      items: items,
      email
    });


    await stripe.initPaymentSheet({
      merchantDisplayName: 'Makea',
      setupIntentClientSecret: data.data.client_secret.client_secret
    });

    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret: data.data.client_secret.client_secret,
    });

    if (presentSheet.error) {
      console.error(presentSheet.error);
      setLoading(false);
      return Alert.alert(presentSheet.error.message);
    } else {
        console.log('Pago realizado 🔥');
        const pay = await post('/create-order-form-movil', {total, email, items})
        setItems([])
        navigation.navigate('OrderScreen')
    }
}

const getOrders = useCallback(async (idUser) => {
  const { data } = await get("/getorder/" + idUser);
  
  setOrders(data.data);
}, []);


return (
  <OrderContext.Provider
    value={{
      /*🔻  Variables 🔻*/
      showCheckout,
      setShowCheckout,
      orders,
      /*🔻  Funciones 🔻*/
      createOrder,
      getOrders
    }}
  >
    {children}
  </OrderContext.Provider>
);
};

export default OrderProvider;

export const useOrderContext = () => useContext(OrderContext);
