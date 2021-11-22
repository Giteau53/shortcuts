import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SoftwareScreen(props) {
  const { software } = props.route.params;

  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />);

  const [softwares, setSoftware] = useState([]);
  const [shortcut, setShortcut] = useState([]);

  const shortcutJsx = shortcut.map((s) => (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Details", { details: s })}
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rechercher par logiciel :</Text>
      <ScrollView style={styles.selector}>
        <Picker
          selectedValue={softwares}
          onValueChange={function (itemValue, itemIndex) {
            fetch(process.env.API_URL + "shortcuts?software.id=" + itemValue)
              .then((response) => response.json())
              .then((data) => setShortcut(data["hydra:member"]))
              .catch((error) => console.log(error));
            setSoftware(itemValue);
          }}
          mode="dropdown"
        >
          <Picker.Item label="logiciel" value="affichage des raccourcis" />
          {softwareJsx}
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
    marginBottom: 30,
    marginTop: 30,
  },
});
