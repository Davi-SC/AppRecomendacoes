import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: "Aleatório",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="casino" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
