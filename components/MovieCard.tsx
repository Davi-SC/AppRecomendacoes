import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { theme } from "../constants/theme";
import { Image } from "expo-image";

type MovieCardProps = {
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
}: MovieCardProps) {
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
      <Text style={styles.title}>
        {placeholder ? "Adicionar filme" : title}
      </Text>
      <Text style={styles.subtitle}>
        {placeholder ? "Toque para buscar" : subtitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing,
    width: "48%",
  },
  poster: {
    height: 140,
    borderRadius: theme.radius,
    backgroundColor: theme.colors.card,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    overflow: "hidden",
  },
  posterPlaceholder: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: theme.colors.primary,
    backgroundColor: "transparent",
  },
  posterImage: { width: "100%", height: "100%" },
  posterEmoji: { fontSize: 40, color: theme.colors.text },
  title: { color: theme.colors.text, fontWeight: "700", fontSize: 16 },
  subtitle: { color: theme.colors.subtext, fontSize: 12, marginTop: 4 },
});
