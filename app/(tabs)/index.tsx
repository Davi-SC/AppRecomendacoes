import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MovieCard from "../../components/MovieCard";
import SearchModal from "../../components/SearchModal";
import { localMovies } from "../../data/localMovies";
import { styles } from "../../styles/styles";
import Header from "../../components/Header";
import ButtonPrim from "../../components/ButtonPrim";
import Footer from "../../components/Footer";

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

    const available = localMovies.filter(
      (movie) => movie.title !== left?.title && movie.title !== right?.title
    );

    const shuffled = [...available].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 4);

    const mockRecs: Movie[] = selected.map((movie) => ({
      title: movie.title,
      subtitle: movie.subtitle,
      imageSource: movie.imageSource,
    }));
    setRecs(mockRecs);
  }

  return (
    <ScrollView style={styles.tela}>
      <Header title="Movie Match" />

      <View style={styles.linhaHorizontal}>
        <MovieCard
          placeholder={!left}
          title={left?.title}
          subtitle={left?.subtitle}
          imageSource={left?.imageSource}
          style={styles.metade}
          onPress={() => setOpen("left")}
        />
        <MovieCard
          placeholder={!right}
          title={right?.title}
          subtitle={right?.subtitle}
          imageSource={right?.imageSource}
          style={styles.metade}
          onPress={() => setOpen("right")}
        />
      </View>

      <ButtonPrim title="Combinar Filmes" onPress={combineMovies} />

      <Text style={styles.tituloSecao}>Recomendações:</Text>
      {recs.length > 0 ? (
        <FlatList
          data={recs}
          keyExtractor={(item, idx) => `${item.title}-${idx}`}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.linhaHorizontal}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              subtitle={item.subtitle}
              imageSource={item.imageSource}
              style={styles.card}
            />
          )}
          contentContainerStyle={{ gap: 12 }}
        />
      ) : (
        <Text style={styles.subtexto}>Nenhuma recomendação ainda.</Text>
      )}
      <SearchModal
        visible={!!open}
        onClose={() => setOpen(null)}
        onSelect={(m) => {
          if (open === "left") setLeft(m);
          if (open === "right") setRight(m);
        }}
      />
      <Footer />
    </ScrollView>
  );
}
