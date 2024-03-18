import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import pizza from "../images/pizza.jpeg";

function CategoriesCard({ title, image }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={image} className="h-20 w-20 rounded text-red-700" />
      <Text className="absolute bottom-1 left-1 text-white  font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CategoriesCard;
