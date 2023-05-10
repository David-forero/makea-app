import { useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { BasketItem } from './components';
import { useBasketContext } from '../context/BasketContext';
import { useOrderContext } from '../context/OrderContext';
import { useAuthContext } from '../context/AuthContext';


const BasketScreen = () => {
  const { items, total } = useBasketContext();
  const { createOrder } = useOrderContext();
  const { user, auth } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Text style={{ fontWeight: "bold", marginVertical: 20 }}>Tu Cesta</Text>

      <FlatList
        data={items}
        renderItem={({ item }) => <BasketItem item={item} />}
      />

      <View style={styles.separator} />
      {
        auth ? (
          <Pressable
            disabled={loading}
            onPress={() => {
              setLoading(true);
              createOrder(items, user.email, navigation, setLoading)
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>
              {loading ? <ActivityIndicator color={'#fff'} /> : `Crear pedido ${total}`}
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate('AuthScreen')
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Iniciar sessión
            </Text>
          </Pressable>
        )
      }
    </View>

  )
}

export default BasketScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, //Temp fix
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 25,
    // fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    marginRight: 10,
    paddingRight: 5,
    borderRadius: 3,
  },
});
