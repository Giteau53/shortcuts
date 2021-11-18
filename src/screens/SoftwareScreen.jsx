import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SoftwareScreen(props) {
  const { software } = props.route.params;

  const SoftwareJsx = software
    .sort((s1, s2) => s1.name.localeCompare(s2.name))
    .map((s) => <Picker.Item label={s.name} value={s.id} />);

  const [value, setValue] = useState([]);
  console.log(software);

  return (
    <View>
      <Text>Rechercher par logiciel: </Text>
      <Picker selectedValue={value} onValueChange={(v) => setValue(v)}>
        <Picker.item label="Logiciel" value="" color="grey" />
        {SoftwareJsx}
      </Picker>
    </View>
  );
}
