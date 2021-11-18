import React, { Component } from "react";
import { View, Text } from "react-native";
import CategoryScreen from "./src/screens/CategoryScreen";
import SoftwareScreen from "./src/screens/SoftwareScreen";

export default function CategoryScreen, SoftwareScreen {


  return (
    <View>
      <Text>Ajouter un raccourci :</Text>
      <Text>Catégorie: </Text>
      <Picker selectedValue={value} onValueChange={(v) => setValue(v)}>
        <Picker.item label="Catégorie" value="" color="grey" />
        {categoriesJsx}
      </Picker>
      <Text>Rechercher par logiciel: </Text>
      <Picker selectedValue={value} onValueChange={(v) => setValue(v)}>
        <Picker.item label="Logiciel" value="" color="grey" />
        {SoftwareJsx}
      </Picker>
    </View>
  );
}











