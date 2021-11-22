import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function DetailsScreen(props) {
  const [detail, setDetail] = useState([]);
  const { details } = props.route.params;
  console.log(props.route.params);

  useEffect(() => {
    fetch(process.env.API_URL + "shortcuts")
      .then((response) => response.json())
      .then((data) => setDetail(data["hydra:member"]))
      .catch((error) => console.log(error));
  }, []);
  console.log({ details });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{details.title} </Text>
      <View style={styles.categories}>
        {details.categories.map((c) => (
          <Text key={c.id} style={styles.cat}>
            {c.name}
          </Text>
        ))}
        <Text style={styles.software}>{details.software.name}</Text>
      </View>

      <Text style={styles.plateform}>
        {" "}
        Windows
        <Text style={styles.text}> {details.windows} </Text>
      </Text>
      <Text style={styles.plateform}>
        {" "}
        Mac
        <Text style={styles.text}> {details.macos} </Text>
      </Text>
      <Text style={styles.plateform}>
        {" "}
        Linux
        <Text style={styles.text}> {details.linux} </Text>
      </Text>
      <Text style={styles.nomCat}> Contexte : </Text>
      <Text style={styles.text}>{details.context} </Text>
      <Text style={styles.nomCat}> Description : </Text>
      <Text style={styles.text}>{details.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "antiquewhite",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
  },
  cat: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "cornflowerblue",
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
    fontSize: 18,
    fontWeight: "bold",
  },
  software: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    backgroundColor: "gold",
    color: "white",
    width: 180,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    fontSize: 16,
  },
  categories: {
    display: "flex",
    flexDirection: 1,
  },
  text: {
    fontSize: 15,
  },
  nomCat: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
