import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { styles } from "../styles/styles";
import { Image } from "expo-image";

type Props = {
  title?: string;
  subtitle?: string;
  placeholder?: boolean;
  imageUrl?: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function MovieCard({
  title,
  subtitle,
  imageUrl,
  onPress,
  style,
  placeholder,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={[styles.poster, placeholder && styles.posterPlaceholder]}>
        {imageUrl && !placeholder ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.posterImage}
            contentFit="cover"
            transition={300}
          />
        ) : (
          <Text style={styles.posterEmoji}>{placeholder ? "?" : "🎬"}</Text>
        )}
      </View>
      <Text style={styles.texto}>
        {placeholder ? "Adicionar filme" : title}
      </Text>
      <Text style={styles.subtexto}>
        {placeholder ? "Toque para buscar" : subtitle}
      </Text>
    </TouchableOpacity>
  );
}
