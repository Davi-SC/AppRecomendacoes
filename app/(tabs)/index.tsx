import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import MovieCard from "../../components/MovieCard";
import SearchModal from "../../components/SearchModal";
import { localMovies } from "../../data/localMovies";
import { styles } from "../../styles/styles";

type Movie = {
  title: string;
  subtitle: string;
  imageSource?: any;
};

export default function HomeScreen() {
  const [left, setLeft] = useState<Movie | null>(null);
  const [right, setRight] = useState<Movie | null>(null);
  const [recs, setRecs] = useState<Movie[]>([]);
  const [open, setOpen] = useState<null | "left" | "right">(null);

  function combineMovies() {
    // puxar filmes aleatórios de localMovies como recomendações
    const mockRecs: Movie[] = [
      localMovies[Math.floor(Math.random() * localMovies.length)],
      localMovies[Math.floor(Math.random() * localMovies.length)],
      localMovies[Math.floor(Math.random() * localMovies.length)],
    ];
    setRecs(mockRecs);
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.tituloApp}>Movie Match</Text>

      <View style={styles.linhaHorizontal}>
        <MovieCard
          placeholder={!left}
          title={left?.title}
          subtitle={left?.subtitle}
          imageUrl={left?.imageSource}
          style={styles.metade}
          onPress={() => setOpen("left")}
        />
        <MovieCard
          placeholder={!right}
          title={right?.title}
          subtitle={right?.subtitle}
          imageUrl={right?.imageSource}
          style={styles.metade}
          onPress={() => setOpen("right")}
        />
      </View>

      <TouchableOpacity style={styles.btnPrimary} onPress={combineMovies}>
        <Text style={styles.btnPrimaryText}>Combinar Filmes</Text>
      </TouchableOpacity>

      <Text style={styles.tituloSecao}>Recomendações:</Text>
      <FlatList
        data={recs}
        keyExtractor={(item, idx) => `${item.title}-${idx}`}
        renderItem={({ item }) => (
          <View style={styles.cardList}>
            <Text style={styles.texto}>{item.title}</Text>
            <Text style={styles.subtexto}>{item.subtitle}</Text>
          </View>
        )}
        contentContainerStyle={styles.listaGap}
        ListEmptyComponent={
          <Text style={styles.hint}>Adicione filmes e combine</Text>
        }
      />
      <SearchModal
        visible={!!open}
        onClose={() => setOpen(null)}
        onSelect={(m) => {
          if (open === "left") setLeft(m);
          if (open === "right") setRight(m);
        }}
      />
    </View>
  );
}
