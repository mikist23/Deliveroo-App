import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LocationMarkerIcon, MapIcon, StarIcon } from 'react-native-heroicons/solid'

const RestaurantCard = ({
    id,
    image,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-2 shadow ">
        <Image
        source={image}
        className="h-36 w-64 rounded-sm"/>t  

        <View className="px-3 pb-4" >
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22}  />
                <Text className="text-sm text-gray-700">
                <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
            </View>

            <View className="flex-row items-center space-x-1">
                <MapIcon color="blue" opacity={0.4} size={22} />
                <Text className="text-sm text-gray-500">Neary . {address}</Text>
            </View>
        </View>

      
      </TouchableOpacity>
  )
}

export default RestaurantCard