import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, Stack, router, useLocalSearchParams } from "expo-router";
import { RewardBadge } from "../components/RewardBadge";
import { ScreenContainer } from "../components/ScreenContainer";
import { quests } from "../mocks/quests";
import { colors, fonts } from "../theme";

export function MissionDetailsScreen() {
  // Valores enviados pela tela de origem (router.push ou link direto).
  const { id, origem } = useLocalSearchParams<{
    id: string;
    origem?: string;
  }>();

  const quest = quests.find((item) => item.id === id);

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }

  if (!quest) {
    return (
      <ScreenContainer edges={["bottom", "left", "right"]}>
        <View style={styles.content}>
          <Text style={styles.title}>Missão não encontrada</Text>
          <Text style={styles.description}>
            Nenhuma missão corresponde ao ID &quot;{id}&quot;.
          </Text>
          <Link href="/" replace asChild>
            <Pressable style={styles.button} accessibilityRole="button">
              <Text style={styles.buttonText}>Ir para Jornada</Text>
            </Pressable>
          </Link>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer edges={["bottom", "left", "right"]}>
      <Stack.Screen options={{ title: quest.title }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>DETALHES DA MISSÃO</Text>
        <Text style={styles.title}>{quest.title}</Text>
        {origem && <Text style={styles.origin}>Origem: {origem}</Text>}

        <View style={styles.card}>
          <Text style={styles.description}>{quest.description}</Text>
          <Text style={styles.metadata}>Dificuldade: {quest.difficulty}</Text>
          {quest.dueDate ? (
            <Text style={styles.metadata}>Entrega: {quest.dueDate}</Text>
          ) : (
            <Text style={styles.metadata}>Sem prazo informado</Text>
          )}
          <Text style={styles.label}>RECOMPENSAS</Text>
          <View style={styles.rewards}>
            <RewardBadge amount={quest.reward.xp} kind="xp" />
            <RewardBadge amount={quest.reward.coins} kind="coins" />
          </View>
        </View>

        <Pressable
          onPress={handleBack}
          accessibilityRole="button"
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>

        <Text style={styles.metadata}>ID recebido: {id}</Text>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 16 },
  label: {
    fontFamily: fonts.extrabold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.purple,
  },
  title: {
    fontFamily: fonts.extrabold,
    fontSize: 22,
    lineHeight: 28,
    color: colors.text,
  },
  origin: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 15,
    color: colors.orange,
  },
  card: {
    padding: 16,
    gap: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
  metadata: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 15,
    color: colors.muted,
  },
  rewards: { flexDirection: "row", gap: 8 },
  button: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: colors.purple,
  },
  pressed: { opacity: 0.75 },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    lineHeight: 19,
    color: colors.background,
  },
});
