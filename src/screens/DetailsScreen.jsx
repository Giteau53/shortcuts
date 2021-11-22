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
      <View>
        {details.categories.map((c) => (
          <Text key={c.id} style={styles.cat}>
            {c.name}
          </Text>
        ))}
      </View>
      <Text style={styles.plateform}> Windows {details.windows} </Text>
      <Text style={styles.plateform}> Mac {details.macos} </Text>
      <Text style={styles.plateform}> Linux {details.linux} </Text>
      <Text> Contexte {details.context} </Text>
      <Text> Description : {details.description}</Text>
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
