import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function ExploreScreen() {
  const alerta = () => {
    Alert.alert("Funcionalidade em desenvolvimento");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Descubra recomendações com base em filmes preferidos!
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Simpsons</Text>
        <Text style={styles.cardSubtitle}>Comédia - 2007</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Simpsons</Text>
        <Text style={styles.cardSubtitle}>Comédia - 2007</Text>
      </View>
      <Button title="Buscar Recomendações" onPress={alerta} />
      <Button title="Recomendação Aleatória" onPress={alerta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#19192dff" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    marginBottom: 12,
    backgroundColor: "#2c2c41ff",
    borderRadius: 8,
    padding: 16,
  },
  cardTitle: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  cardSubtitle: { color: "#a2a2acff", fontSize: 13 },
});
