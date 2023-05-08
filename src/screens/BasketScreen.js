import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { BasketItem } from './components';
import { useBasketContext } from '../context/BasketContext';
import { useStripe } from '@stripe/stripe-react-native';
import { useOrderContext } from '../context/OrderContext';


const BasketScreen = () => {
  const { items, total } = useBasketContext();
  const { createOrder } = useOrderContext();


  return (
 <View style={styles.page}>
      <Text style={{ fontWeight: "bold", marginVertical: 20 }}>Tu Cesta</Text>

      <FlatList
        data={items}
        renderItem={({ item }) => <BasketItem item={item} />}
      />

      <View style={styles.separator} />
      <Pressable
        onPress={() => createOrder(items)} 
        style={styles.button}>
        <Text style={styles.buttonText}>
          Crear pedido ${total}
        </Text>
      </Pressable>
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
