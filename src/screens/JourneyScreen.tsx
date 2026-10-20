import { ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { BossCard } from "../components/BossCard";
import { MissionCard } from "../components/MissionCard";
import { PlayerHeader } from "../components/PlayerHeader";
import { ScreenContainer } from "../components/ScreenContainer";
import { boss } from "../mocks/boss";
import { player } from "../mocks/player";
import { quests } from "../mocks/quests";
import { colors, fonts } from "../theme";

export function JourneyScreen() {
  const featuredQuest = quests[0];

  return (
    <ScreenContainer>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <PlayerHeader player={player} />
        <View style={styles.main}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            MISSÃO EM DESTAQUE
          </Text>
          {featuredQuest && (
            <MissionCard
              quest={featuredQuest}
              onPress={() =>
                router.push({
                  pathname: "/missao/[id]",
                  params: { id: featuredQuest.id, origem: "jornada" },
                })
              }
            />
          )}
          <BossCard boss={boss} />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { flexGrow: 1 },
  main: { padding: 20, gap: 20 },
  sectionTitle: {
    fontFamily: fonts.extrabold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.muted,
  },
});
