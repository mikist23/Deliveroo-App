import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import headerIMG from "../images/header.png";
import {
  SparklesIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import SearchIcon from "react-native-vector-icons/AntDesign";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="mt-9 pt-5 bg-white">
        {/**Header */}
        <View className="flex flex-row items-center justify-between mx-4 space-x-2">
          <View className="flex flex-row items-center space-x-2">
            <Image
              source={headerIMG}
              className="h-7 w-7 bg-gray-300 rounded-full p-4"
            />
            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-sm">
                Deliver Now
              </Text>
              <Text className="font-bold text-xl items-center">
                Current Location
                <ChevronDownIcon size={20} color={"#00CCBB"} />
              </Text>
            </View>
            <Text>
              <UserIcon size={35} color={"#00CCBB"} />
            </Text>
          </View>
        </View>

        {/**Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 mt-3">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <SearchIcon name="search1" size={20} color="gray" />
            <TextInput placeholder="Search " keyboardType="default" />
          </View>
        </View>

        {/**Categories */}
        <View>
          <ScrollView
            className="bg-gray-100"
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            {/**Catgories */}
            <Categories />

            {/**Features */}
             
            <FeaturedRow
              id="123"
              title="Featured"
              description="Paid placements from our partners"
              featuredCategory="featured"
            />

            {/**Tasty Discounts */}

            <FeaturedRow
              id="1234"
              title="Featured"
              description="Paid placements from our partners"
              featuredCategory="featured"
            />

            {/**Offers near you */}

            <FeaturedRow
              id="12345" 
              title="Featured"
              description="Paid placements from our partners"
              featuredCategory="featured"
            />
            

            {/**Offers near you */}

            <FeaturedRow
              id="12346" 
              title="Featured"
              description="Paid placements from our partners"
              featuredCategory="featured"
            />
            

          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default HomeScreen;
