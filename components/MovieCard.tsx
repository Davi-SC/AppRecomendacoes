import { Image } from "expo-image";
import React from "react";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "../styles/styles";

type Props = {
  title?: string;
  subtitle?: string;
  placeholder?: boolean;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function MovieCard({
  title,
  subtitle,
  imageSource,
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
        {imageSource && !placeholder ? (
          <Image
            source={imageSource}
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
