import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import { Category } from './components';

//Icons 🔥
import { FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import {CardsProducts} from '../common/components';
import { useFurnitureContext } from '../context/FurnitureContext';

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"

const HomeScreen = ({ navigation }) => {
  const {furnitures} = useFurnitureContext();
  
  return (
    <SafeAreaView className="bg-white flex-1" >
      {/* Header container */}
      <View className="pt-10 px-5 mb-1 flex-row justify-between">
        <Text className="text-2xl text-blue-600 font-bold">Makea</Text>
        <AntDesign name="shoppingcart" size={28} className="text-blue-800" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="font-bold text-2xl w-[55%] line-clamp-2 py-5 ml-5">Los mejores muebles para tu casa.</Text>

        {/* Input and sort button container */}
        <View
          className="flex-row justify-between p-5">
          <View className="h-[50px] bg-gray-200 flex-1 flex-row items-center py-5 rounded-xl p-3">
          <MaterialCommunityIcons name="magnify" size={25} color="black" className="mr-3" />
            <TextInput placeholder="Buscar..." />
          </View>

          <View className="bg-sky-800 h-[50px] w-[50px] rounded-xl justify-center items-center ml-[10px]">
          
            <MaterialCommunityIcons name="tune-vertical" size={25} color="white" />
          </View>
        </View>

        {/* Render To Furnitures */}
        <FlatList
          data={furnitures}
          renderItem={({ item }) => <CardsProducts furniture={item} />}
          showsVerticalScrollIndicator={false}
        />


      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;