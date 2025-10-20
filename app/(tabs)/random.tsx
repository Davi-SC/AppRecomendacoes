// app/(tabs)/random.tsx
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MovieCard from "../../components/MovieCard";
import { localMovies } from "../../data/localMovies";
import { styles } from "../../styles/styles";

type Movie = { title: string; subtitle: string; imageSource?: any };

export default function RandomScreen() {
  const [movie, setMovie] = useState<Movie | null>(null);

  function recommend() {
    const next = localMovies[Math.floor(Math.random() * localMovies.length)];
    setMovie({
      title: next.title,
      subtitle: next.subtitle,
      imageSource: next.image,
    });
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.tituloApp}>🎬 movie match</Text>

      <View style={styles.centro}>
        <MovieCard
          placeholder={!movie}
          title={movie?.title}
          subtitle={movie?.subtitle}
          imageUrl={movie?.imageSource}
          style={{ width: "70%" }}
        />
      </View>

      <TouchableOpacity style={styles.btnSecondary} onPress={recommend}>
        <Text style={styles.btnSecondaryText}>🎲 Recomendar aleatório</Text>
      </TouchableOpacity>
    </View>
  );
}
