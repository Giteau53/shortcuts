import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CategoryScreen(props) {
  const { categories } = props.route.params;

  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name)) //Trie par ordre alphabétique
    .map((c) => <Picker.Item label={c.name} value={c.id} />);

  const [value, setValue] = useState([]);
  console.log(categories);

  return (
    <View>
      <Text>Rechercher par catégorie: </Text>
      <Picker selectedValue={value} onValueChange={(v) => setValue(v)}>
        <Picker.item label="Catégorie" value="" color="grey" />
        {categoriesJsx}
      </Picker>
    </View>
  );
}
