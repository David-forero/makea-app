import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CardsProducts = ({furniture}) => {
  const navigation = useNavigation();
  return (
    <Pressable 
    onPress={() => navigation.navigate('DetailsScreen', {furniture})} 
    className="w-full py-3">
        <Image source={{ uri: furniture.imgUrl }} className="w-full aspect-[5/3] mb-1" />
        <View className="flex-row items-center px-2">
          <View>
            <Text className="text-lg font-bold my-1">{furniture.title}</Text>
            <Text className="text-gray-500">
              ${furniture.price} 
            </Text>
          </View>

          <View className="ml-auto bg-slate-200 h-7 w-7 items-center justify-center rounded-2xl">
            <Text>4.5</Text>
          </View>
        </View>
      </Pressable>
  )
}

export default CardsProducts

const styles = StyleSheet.create({})