import { Image, StyleSheet, Text, View } from "react-native";

const BasketItem = ({ item }) => {
    return (
        <View style={styles.row} styles={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.name} className="mt-3">{item.title}</Text>
                <Text style={styles.description} className="mt-1" numberOfLines={2}>
                    {item.description}
                </Text>
                <Text style={styles.price} className="text-green-800 mt-2 mb-3">$ {item.price}</Text>
            </View>

            {item.imgUrl && (
                <Image source={{ uri: item.imgUrl }} style={styles.image} />
            )}
        </View>
    );
};

export default BasketItem

const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginHorizontal: 20,
      marginVertical: 20,
      borderBottomColor: "lightgrey",
      borderBottomWidth: 1,
      flexDirection: "row",
    },
    name: {
      fontWeight: "600",
      fontSize: 16,
      letterSpacing: 0.5,
    },
    description: {
      color: "gray",
      marginVertical: 5,
    },
    price: {
      fontSize: 16,
    },
    image: {
      height: 75,
      aspectRatio: 1,
    },
  });