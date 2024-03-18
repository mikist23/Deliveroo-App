import React from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
import CategoriesCard from './CategoriesCard';
import pizza from "../images/pizza.jpeg";

function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
 {/**Categories card */}

 <CategoriesCard image={pizza} title="Pizza" />
 <CategoriesCard image={pizza}  title="Pizza"/>
 <CategoriesCard image={pizza}  title="Pizza"/>
 <CategoriesCard image={pizza}  title="Pizza"/>
 <CategoriesCard image={pizza} title="Pizza" />
 <CategoriesCard image={pizza}  title="Pizza"/>
 <CategoriesCard image={pizza}  title="Pizza"/>
 <CategoriesCard image={pizza}  title="Pizza"/>
 <CategoriesCard image={pizza} title="Pizza" />
 <CategoriesCard image={pizza}  title="Pizza"/>
 <CategoriesCard image={pizza}  title="Pizza"/>
 <CategoriesCard image={pizza}  title="Pizza"/>

    </ScrollView>
  )
}

export default Categories