import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { MissionCard } from "../components/MissionCard";
import { ScreenContainer } from "../components/ScreenContainer";
import { ScreenTitle } from "../components/ScreenTitle";
import { quests } from "../mocks/quests";

export function MissionsScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content}>
        <ScreenTitle
          title="Missões"
          subtitle="Escolha uma missão para ver os detalhes"
        />
        {quests.map((quest) => (
          <MissionCard
            key={quest.id}
            quest={quest}
            onPress={() =>
              router.push({
                pathname: "/missao/[id]",
                params: { id: quest.id, origem: "missoes" },
              })
            }
          />
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 16 },
});
