import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { localMovies } from "../data/localMovies";
import { styles, theme } from "../styles/styles";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (item: {
    title: string;
    subtitle: string;
    imageSource: any;
  }) => void;
};

export default function SearchModal({ visible, onClose, onSelect }: Props) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return localMovies
      .filter((m) => m.title.toLowerCase().includes(s))
      .slice(0, 10);
  }, [q]);

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalHeader}>Buscar Filme</Text>
        <TextInput
          value={q}
          onChangeText={setQ}
          style={styles.input}
          placeholder="Digite o nome do filme"
          placeholderTextColor={theme.colors.subtext}
          autoFocus
        />
        <FlatList
          data={filtered}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ gap: 8, paddingTop: 12 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.modalRow}
              onPress={() => {
                onSelect({
                  title: item.title,
                  subtitle: item.subtitle,
                  imageSource: item.imageSource,
                });
                onClose();
                setQ("");
              }}
            >
              <Image
                source={item.imageSource}
                style={{ width: 50, height: 75, borderRadius: 8 }}
              ></Image>
              <View style={{ flex: 1 }}>
                <Text style={styles.texto}>{item.title}</Text>
                <Text style={styles.subtexto}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Text style={styles.closeText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
