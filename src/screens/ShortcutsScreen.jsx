import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function ShortcutsScreen(props) {
  const { categories } = props.route.params;
  const [shortcut, setShortcut] = useState([]);

  const shortcutJsx = shortcut.map((s) => (
    <View key={s.id}>
      <Text>{s.title}</Text>
      <Text>{s.software.name}</Text>
      <View>
        {categories.map((c) => (
          <Text key={c.id}>{c.name}</Text>
        ))}
      </View>
    </View>
  ));

  return (
    <View>
      <ScrollView>
        <Picker
          selectedValue={categories}
          onValueChange={function (itemValue, itemIndex) {
            fetch(process.env.API_URL + "shortcuts?categories.id=" + itemValue)
              .then((response) => response.json())
              .then((data) => setShortcut(data["hydra:member"]))
              .catch((error) => console.log(error));
            setCategory(itemValue);
          }}
          mode="dropdown"
        >
          <Picker.Item label="catégorie" value="affichage des raccourcis" />
          {categoriesJsx}
        </Picker>
        <Text>{shortcutJsx}</Text>
      </ScrollView>
    </View>
  );
}
