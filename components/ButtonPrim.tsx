import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "../styles/styles";

type Props = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function ButtonPrim({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnPrim, style]}>
      <Text style={styles.btnPrimText}>{title}</Text>
    </TouchableOpacity>
  );
}
