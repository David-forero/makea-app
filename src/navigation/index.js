import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {DetailsScreen, HomeScreen, OrderScreen, BasketScreen} from "../screens";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Profile from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Dish" component={HomeScreen} />
      <HomeStack.Screen name="Basket" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};


export default RootNavigator;
