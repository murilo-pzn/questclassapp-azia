import { Tabs } from "expo-router";
import { View } from "react-native";
import { Icon } from "../../components/Icon";
import { colors, fonts } from "../../theme";

type TabIconProps = {
  name: "journey" | "quests" | "tavern" | "character";
  focused: boolean;
};

// Aba ativa com ícone total; inativas mais apagadas.
function TabIcon({ name, focused }: TabIconProps) {
  return (
    <View style={{ opacity: focused ? 1 : 0.5 }}>
      <Icon name={name} />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: { fontFamily: fonts.semibold, fontSize: 11 },
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Jornada",
          tabBarIcon: ({ focused }) => <TabIcon name="journey" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="missoes"
        options={{
          title: "Missões",
          tabBarIcon: ({ focused }) => <TabIcon name="quests" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="taverna"
        options={{
          title: "Taverna",
          tabBarIcon: ({ focused }) => <TabIcon name="tavern" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="personagem"
        options={{
          title: "Personagem",
          tabBarIcon: ({ focused }) => <TabIcon name="character" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
