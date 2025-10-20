export type LocalMovie = {
  id: number;
  title: string;
  subtitle: string;
  imageSource: any;
};

export const localMovies: LocalMovie[] = [
  {
    id: 1,
    title: "Os Simpsons",
    subtitle: "O filme",
    imageSource: require("../assets/images/simpsons.jpg"),
  },
  {
    id: 2,
    title: "Esquadrão Suicida",
    subtitle: "O filme",
    imageSource: require("../assets/images/esquadrao.png"),
  },
  {
    id: 3,
    title: "Vingadores",
    subtitle: "Guerra Infinita",
    imageSource: require("../assets/images/vingadores.jpg"),
  },
  {
    id: 4,
    title: "O Rei Leão",
    subtitle: "O filme",
    imageSource: require("../assets/images/reileao.jpg"),
  },
  {
    id: 5,
    title: "Toy Story",
    subtitle: "O primeiro filme",
    imageSource: require("../assets/images/toystory.jpg"),
  },
];
