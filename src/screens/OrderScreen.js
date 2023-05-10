import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext';
import { useOrderContext } from '../context/OrderContext';

const OrderScreen = () => {
  const {orders, getOrders} = useOrderContext();
  const {auth, user} = useAuthContext();

  useEffect(() => {
    if (user?.id) {
      getOrders(user?.id)
    }
  }, [user])
  return (
    <View className="p-10">
            <Text className="text-3xl border-b mb-2 pb-1 border-blue-700">
              Tus Ordenes 
            </Text>

            {
              auth ? (
                <Text>{orders?.length} Ordenes</Text>
              ) : (
                <Text>Por favor inicia sesión para ver tus ordenes</Text>
              )
            }

            <View className="mt-5 space-y-4">
              {orders && orders?.map(({id, amount, amountShipping, updatedAt, images}, i) => (
                <Order id={id} key={i} amount={amount} amountShipping={amountShipping} updatedAt={updatedAt} images={images} />
              ))}
            </View>
    </View>
  )
}

export default OrderScreen