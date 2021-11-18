import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen(props) {
  const [categories, setCategories] = useState([]);
  const [software, setSoftware] = useState([]);
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL + "categories")
      .then((response) => response.json())
      .then((data) => setCategories(data["hydra:member"]))
      .catch((error) => console.log(error));

    fetch(process.env.API_URL + "software")
      .then((response) => response.json())
      .then((data) => setSoftware(data["hydra:member"]))
      .catch((error) => console.log(error));

    fetch(process.env.API_URL + "shortcuts")
      .then((response) => response.json())
      .then((data) => setShortcuts(data["hydra:member"]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Rechercher par :</Text>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Category", {
            categories: categories,
          })
        }
        style={styles.little_btn}
      >
        <Text>Catégorie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Software", {
            software: software,
          })
        }
        style={styles.little_btn}
      >
        <Text>Logiciel</Text>
      </TouchableOpacity>
      <Text>Ou bien :</Text>

      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Shortcuts", {
            shortcuts: shortcuts,
          })
        }
        style={styles.little_btn}
      >
        <Text>Ajouter un raccourci</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  little_btn: {
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: 200,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 30,

    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "grey",
    borderRadius: 5,
  },
});
