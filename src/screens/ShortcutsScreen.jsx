import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function ShortcutsScreen(props) {
  const { categoriesJsx } = props.route.params;
  const { softwareJsx } = props.route.params;

  const softwaresJsx = softwareJsx
    .sort((s1, s2) => s1.name.localeCompare(s2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />);

  const categorieJsx = categoriesJsx
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />);

  return (
    <View>
      <Text>Ajouter un raccourci :</Text>
      <Text>Logiciel</Text>
      {categorieJsx} {softwaresJsx}
      <Text>Catégories</Text>
    </View>
  );
}
