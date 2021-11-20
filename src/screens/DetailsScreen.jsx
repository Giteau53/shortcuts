import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function DetailsScreen(props) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL + "shortcuts")
      .then((response) => response.json())
      .then((data) => setDetails(data["hydra:member"]))
      .catch((error) => console.log(error));
  }, []);
  console.log({ details });

  const detailsJsx = details.map((d) => (
    <View key={d.id}>
      <Text style={styles.title}>{d.title} </Text>
      <View>
        {d.categories.map((c) => (
          <Text key={c.id} style={styles.cat}>
            {c.name}
          </Text>
        ))}
      </View>
      <Text style={styles.plateform}> Windows {d.windows} </Text>
      <Text style={styles.plateform}> Mac {d.macos} </Text>
      <Text style={styles.plateform}> Linux {d.linux} </Text>
      <Text> Contexte {d.context} </Text>
      <Text> Description : {d.description}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Text>{detailsJsx}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    backgroundColor: "antiquewhite",
  },
  title: {
    fontSize: 20,
  },
  cat: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "gold",
    color: "white",
    width: 180,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
  plateform: {
    fontStyle: "bold",
    fontSize: 15,
  },
});
