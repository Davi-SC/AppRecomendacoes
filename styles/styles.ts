import { StyleSheet } from "react-native";

export const theme = {
  colors: {
    primary: "#6200ee",
    secondary: "#03dac6",
    background: "#f6f6f6",
    error: "#b00020",
    border: "#cccccc",
    card: "#16213e",
    text: "#000000",
    subtext: "#a8a8b3",
  },
  radius: 12,
  spacing: 16,
};

export const styles = StyleSheet.create({
  //containers
  tela: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing,
  },
  centro: {
    alignItems: "center",
    justifyContent: "center",
  },

  //Tipos de texto
  tituloApp: {
    color: theme.colors.text,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: theme.spacing,
  },
  tituloSecao: {
    color: theme.colors.text,
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 8,
    marginTop: 6,
  },
  texto: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: "700",
  },
  subtexto: {
    color: theme.colors.subtext,
    fontSize: 12,
    marginTop: 4,
  },
  hint: {
    color: theme.colors.subtext,
    textAlign: "center",
    marginTop: 8,
  },

  //Layout
  linhaHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metade: {
    width: "48%",
  },

  //Cards
  card: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius,
    padding: theme.spacing,
    borderColor: theme.colors.border,
    borderWidth: 1,
    width: "48%",
  },
  cardList: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.secondary,
  },

  //Poster do filme
  poster: {
    width: "100%",
    height: 180,
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
  posterImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  posterEmoji: {
    fontSize: 48,
    color: theme.colors.text,
  },

  //Botões
  btnPrimary: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing,
    borderRadius: theme.radius,
    alignItems: "center",
    marginVertical: theme.spacing,
  },
  btnPrimaryText: {
    color: theme.colors.text,
    fontWeight: "800",
    fontSize: 16,
  },
  btnSecondary: {
    borderWidth: 2,
    borderColor: theme.colors.secondary,
    padding: theme.spacing,
    borderRadius: theme.radius,
    alignItems: "center",
    marginTop: theme.spacing,
  },
  btnSecondaryText: {
    color: theme.colors.text,
    fontWeight: "800",
    fontSize: 16,
  },

  //Listagem de filmes
  listaGap: {
    gap: 8,
  },

  //Modal
  modalContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing,
  },
  modalHeader: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: theme.spacing,
  },
  input: {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    padding: theme.spacing,
    fontSize: 16,
  },
  modalRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    padding: theme.spacing,
    gap: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  thumb: {
    width: 60,
    height: 72,
    borderRadius: 6,
  },
  noThumb: {
    width: 48,
    height: 72,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtn: {
    alignSelf: "center",
    marginTop: theme.spacing,
    padding: theme.spacing,
  },
  closeText: {
    color: theme.colors.primary,
    fontWeight: "800",
  },
});
