import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen, BasketScreen, DetailsScreen, HomeScreen, OrderScreen } from './src/screens';
import 'react-native-safe-area-context'

//Context
import AuthContextProvider from "./src/context/AuthContext";
import BasketContextProvider from "./src/context/BasketContext";
import OrderContextProvider from "./src/context/OrderContext";
import FurnitureProvider from './src/context/FurnitureContext';

import { StripeProvider } from "@stripe/stripe-react-native";
import Constants from "expo-constants";

const Stack = createStackNavigator();

const App = () => {
  return (
    <StripeProvider publishableKey={Constants.manifest.extra.STRIPE_PUBLIC_KEY}>
      <NavigationContainer>
        <FurnitureProvider>
          <AuthContextProvider>
            <BasketContextProvider>
              <OrderContextProvider>
                {/* <RootNavigator /> */}
                <Stack.Navigator  screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="OrderScreen" component={OrderScreen} />
                  <Stack.Screen name="AuthScreen" component={AuthScreen} /> 
                  <Stack.Screen name="HomeScreen" component={HomeScreen} />
                  <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                  <Stack.Screen name="BasketScreen" component={BasketScreen} />
                </Stack.Navigator>
              </OrderContextProvider>
            </BasketContextProvider>
          </AuthContextProvider>
        </FurnitureProvider>
      </NavigationContainer>
    </StripeProvider>

  );
};

export default App;
