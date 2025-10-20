import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  title: string;
};
export default function Header({ title = "Movie Match" }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.tituloHeader}>{title}</Text>
    </View>
  );
}
