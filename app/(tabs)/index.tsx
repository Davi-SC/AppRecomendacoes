import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Match</Text>
      <Text style={styles.subtitle}>
        Bem vindo ao Movie Match, seu recomendador de filmes favorito!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e94560",
    marginBottom: 10,
  },
  subtitle: { fontSize: 18, color: "#a8a8b3" },
});
