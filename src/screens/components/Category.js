import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({ item, index, selectedCategoryIndex, setSelectedCategoryIndex }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setSelectedCategoryIndex(index)}>
      <View
        className={`flex-row bg-white p-10 rounded-md items-center ${selectedCategoryIndex == index
          ? 'text-blue-800'
          : 'text-white'}`}>
        {/* <Icon
          name={item.iconName}
          size={20}
          color={
            selectedCategoryIndex == index ? 'text-white' : 'text-blue-800'
          }
        /> */}
        <Text
          className="text-sm font-bold ml-1"
          style={[
            {
              color:
                selectedCategoryIndex == index
                  ? 'text-white'
                  : 'text-blue-800',
            },
          ]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({})