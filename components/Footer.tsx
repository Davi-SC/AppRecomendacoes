import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Footer() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
      <Text style={styles.textoFooter}>© 2025 Movie Match.</Text>
    </View>
  );
}
