import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestaurantCard from './RestaurantCard'
import pizza from "../images/pizza.jpeg";

const FeaturedRow = ({id,  title,description,featuredCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg" >{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className="text-sm text-gray-500 px-4">{description}</Text>

        <ScrollView 
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">

            {/**RestarauntCard */}
            <RestaurantCard
            id={123}
            image={pizza}
            title="Yo! Pizza"
            rating={4.5}
            genre="Japanese"
            address="13 Maim St"
            short_description="This is Test descrption"
            dishes={[]}
            long={20}
            lat={0}/>

        </ScrollView>
    </View>
  )
}

export default FeaturedRow