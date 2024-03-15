import React, { useLayoutEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import headerIMG from '../images/header.png'
import { SparklesIcon, ChevronDownIcon } from "react-native-heroicons/solid";

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="mt-5 p-3">
        <Text className="text-blue-600 font-semibold text-lg">
          
          {/**Header */}
          
          <View className="flex flex-row items-center mx-4 space-x-2">
            <Image
            source={headerIMG}
            className="h-7 w-7 bg-gray-300 rounded-full p-4"
            />

            <View >
              <Text className="font-bold text-gray-400 textsm">
                Deliver Now
              </Text>
              <Text className="font-bold text-xl items-center">
                Current Location
                <ChevronDownIcon  size={20} color={"#00CCBB"} />
              </Text>
            </View>
          </View>
          
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default HomeScreen;
