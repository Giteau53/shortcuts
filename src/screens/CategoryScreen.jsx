import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CategoryScreen(props) {
  const { categories } = props.route.params;

  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />);

  const [category, setCategory] = useState([]);
  const [shortcut, setShortcut] = useState([]);
  console.log(categories);

  const shortcutJsx = shortcut.map((s) => (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Detail :", { shortcut: s })}
    >
      <View key={s.id} style={styles.blocContainer}>
        <Text style={styles.selectedTitle}>{s.title}</Text>
        <Text style={styles.selectedCat}>{s.software.name}</Text>
        <View style={styles.selected}>
          {s.categories.map((c) => (
            <Text key={c.id} style={styles.categorie}>
              {c.name}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  ));

  console.log(shortcutJsx);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rechercher par catégorie :</Text>
      <ScrollView>
        <Picker
          selectedValue={category}
          onValueChange={function (itemValue, itemIndex) {
            fetch(process.env.API_URL + "shortcuts?categories.id=" + itemValue)
              .then((response) => response.json())
              .then((data) => setShortcut(data["hydra:member"]))
              .catch((error) => console.log(error));
            setCategory(itemValue);
          }}
          mode="dropdown"
          style={styles.selector}
        >
          <Picker.Item
            label="Choisir une catégorie"
            value="Ici l'affichage des raccourcis"
          />
          {categoriesJsx}
        </Picker>
        <View>{shortcutJsx}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "antiquewhite",
    justifyContent: "space-around",
    flex: 1,
  },
  blocContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: 400,
    textAlign: "center",
    marginBottom: 5,
    margin: 5,
  },
  title: {
    fontSize: 25,
  },
  selected: {
    display: "flex",
    flexDirection: "row",
  },
  selectedCat: {
    backgroundColor: "gold",
    color: "white",
    width: 180,
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
  selectedTitle: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 600,
    fontSize: 18,
  },
  categorie: {
    backgroundColor: "cornflowerblue",
    color: "white",
    width: 180,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
  selector: {
    marginBottom: 10,
    marginTop: 30,
  },
});
