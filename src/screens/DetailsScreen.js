import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useBasketContext } from '../context/BasketContext';

const DetailsScreen = ({ navigation, route }) => {
  const furniture = route.params?.furniture;
  const { items } = useBasketContext();
  const { addToBasket } = useBasketContext()


  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      {
        furniture ? (
          <>
            <View style={style.header} >
              <View style={style.headerBtn} className="bg-gray-100 ">
                <Entypo name="chevron-left" size={25} color="black" onPress={navigation.goBack} />
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Detalles</Text>
              <View style={style.headerBtn}>
                <MaterialCommunityIcons name="dots-vertical" size={25} className="text-blue-600" />
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Furniture image */}

              <ImageBackground
                resizeMode="cover"
                style={style.backgroundImage}
                source={{ uri: furniture.imgUrl }}>
                <View
                  className="bg-gray-800"
                  style={{
                    height: 60,
                    width: 70,
                    position: 'absolute',
                    borderTopLeftRadius: 15,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 5,
                    }}>
                    <Entypo name="star" color={'yellow'} size={18} />
                    <Text
                      className="text-white"
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>

                      4.5
                    </Text>
                  </View>
                  <Text
                    style={{ fontSize: 9, fontWeight: 'bold' }} className="text-white">
                    250 Reviews
                  </Text>
                </View>
              </ImageBackground>

              <View style={style.detailsContainer}>
                <Text
                  className="text-blue-800"
                  style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {furniture.title}
                </Text>
                <Text
                  className="text-black"
                  style={{
                    marginVertical: 20,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Descripcion:
                </Text>
                <Text className="text-black" style={{ fontSize: 12, lineHeight: 20 }}>
                  {furniture.description}
                </Text>
                <View
                  style={{
                    marginVertical: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    className="text-green-800"
                    style={{ fontSize: 22, fontWeight: 'bold' }}>
                    ${furniture.price}
                  </Text>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    className="bg-white"
                    onPress={() => navigation.navigate('BasketScreen')}
                    style={{
                      height: 50,
                      width: 50,
                      elevation: 7,
                      marginRight: 30,
                      borderRadius: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text className="absolute text-[12px] top-0 -right-3 h-5 w-5 bg-blue-800 text-center rounded-full text-white flex justify-center items-center font-bold">{items && items.length}</Text>
                    <AntDesign name="shoppingcart" size={28} className="text-blue-800" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addToBasket(furniture)} style={style.addToCartBtn} className="bg-blue-950">
                    <Text className="text-white">Agregar al carrito</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </>
        ) : <Text>Cargando...</Text>
      }
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  backgroundImage: {
    marginHorizontal: 20,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartBtn: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
  quantityBtn: {
    height: 25,
    width: 25,
    // backgroundColor: COLORS.white,
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    height: 35,
    width: 100,
    // backgroundColor: COLORS.primary,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DetailsScreen