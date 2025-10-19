export type LocalMovie = {
  id: number;
  title: string;
  subtitle: string;
  image: any;
};

export const localMovies: LocalMovie[] = [
  {
    id: 1,
    title: "Os Simpsons",
    subtitle: "O filme",
    image: require("../assets/simpsons.jpg"),
  },
  {
    id: 2,
    title: "Esquadrão Suicida",
    subtitle: "O filme",
    image: require("../assets/esquadrao.png"),
  },
  {
    id: 3,
    title: "Vingadores",
    subtitle: "Guerra Infinita",
    image: require("../assets/vingadores.jpg"),
  },
  {
    id: 4,
    title: "O Rei Leão",
    subtitle: "O filme",
    image: require("../assets/reileao.jpg"),
  },
  {
    id: 5,
    title: "Toy Story",
    subtitle: "O primeiro filme",
    image: require("../assets/toystory.jpg"),
  },
];
