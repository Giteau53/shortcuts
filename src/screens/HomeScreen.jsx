import { Button } from "native-base";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen(props) {
  const [categories, setCategories] = useState([]);
  const [software, setSoftware] = useState([]);
  const [shortcuts, Setshorcuts] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL + "categories")
      .then((response) => response.json())
      .then((data) => setCategories(data["hydra:member"]))
      .catch((error) => console.log(error));

    fetch(process.env.API_URL + "software")
      .then((response) => response.json())
      .then((data) => setSoftware(data["hydra:member"]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Rechercher par :</Text>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Category", {
              categories: categories,
            })
          }
          style={styles.littleBtn}
        >
          <Text style={styles.btnTitle}>Catégorie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Software", {
              software: software,
            })
          }
          style={styles.littleBtn}
        >
          <Text style={styles.btnTitle}>Logiciel</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Ou bien :</Text>

      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Shortcuts", {
            shortcuts: shortcuts,
          })
        }
        style={styles.littleBtn}
      >
        <Text style={styles.btnShortcuts}>Ajouter un raccourci</Text>
      </TouchableOpacity>
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

  title: {
    fontSize: 25,
  },
  button: {
    display: "flex",
    flexDirection: "row",
  },
  littleBtn: {
    backgroundColor: "dodgerblue",
    borderRadius: 30,
    padding: 20,
    textAlign: "center",
    margin: 15,
  },
  btnTitle: {
    color: "white",
    fontSize: 18,
  },
  btnShortcuts: {
    color: "white",
    fontSize: 18,
  },
});
