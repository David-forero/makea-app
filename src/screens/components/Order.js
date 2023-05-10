import { Text, View, Image } from 'react-native'
import React from 'react'
import { currencyFormat } from '../../common/functions/format-currency'
import moment from 'moment'

const Order = ({ id,
  amount,
  amountShipping,
  updatedAt,
  images,}) => {
  console.log();
  return (
    <View className="relative border rounded-md mt-5">
    <View className="flex-row items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-800">
      <View>
        <Text className="font-bold text-xs">Orden</Text>
        <Text>{moment(updatedAt).format("DD MMM YYYY")}</Text>
      </View>

      <View>
        <Text className="text-xs font-bold">TOTAL</Text>
        <Text>
          {currencyFormat(amount) } - Delivery{" "}
          {currencyFormat(amountShipping)}
        </Text>
      </View>

      <Text className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
        {images.length} items
      </Text>

      <Text className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
        ORDER #{id}
      </Text>
    </View>

    <View className="p-5 ">
      <View className="flex-row space-x-6 overflow-x-auto">
        {images?.map((image, i) => (
          <Image
            source={{uri: image}}
            alt="items"
            key={i}
            className="h-20 w-20 "
          />
        ))}
      </View>
    </View>
  </View>
  )
}

export default Order
