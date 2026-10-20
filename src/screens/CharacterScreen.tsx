import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { EquipmentItem } from "../components/EquipmentItem";
import { ProgressBar } from "../components/ProgressBar";
import { ScreenContainer } from "../components/ScreenContainer";
import { ScreenTitle } from "../components/ScreenTitle";
import { TitleChip } from "../components/TitleChip";
import { characterProfile } from "../mocks/character";
import { player } from "../mocks/player";
import { colors, fonts } from "../theme";
import { showMessage } from "../utils/showMessage";

export function CharacterScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content}>
        <ScreenTitle
          title="Personagem"
          right={
            <Pressable
              onPress={() =>
                showMessage("Configurações", "Esta área ainda não foi desenvolvida.")
              }
              accessibilityRole="button"
              accessibilityLabel="Abrir configurações"
              style={({ pressed }) => [styles.settings, pressed && styles.pressed]}
            >
              <Text style={styles.settingsIcon}>⚙️</Text>
            </Pressable>
          }
        />

        <View style={styles.hero}>
          <View style={styles.avatarRing}>
            <Image
              source={require("../../assets/images/lyra.png")}
              style={styles.avatar}
              resizeMode="cover"
              accessibilityLabel={`Avatar de ${player.name}`}
            />
          </View>
          <Text style={styles.name}>{player.name}</Text>
          <Text style={styles.characterClass}>{player.characterClass}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>Nível {player.level}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.cardLabel}>PROGRESSO</Text>
            <Text style={styles.xp}>
              {player.xp} / {player.nextLevelXp} XP
            </Text>
          </View>
          <ProgressBar
            value={player.xp}
            max={player.nextLevelXp}
            color={colors.purple}
            label="Experiência para o próximo nível"
          />
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.stat}>
              <Text style={styles.cardLabel}>MOEDAS</Text>
              <Text style={[styles.statValue, { color: colors.orange }]}>
                {player.coins}
              </Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.cardLabel}>MISSÕES</Text>
              <Text style={[styles.statValue, { color: colors.text }]}>
                {characterProfile.completedQuests} concluídas
              </Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.cardLabel}>SEQUÊNCIA</Text>
              <Text style={[styles.statValue, { color: colors.pink }]}>
                {player.streak} dias
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            Títulos Desbloqueados
          </Text>
          <View style={styles.chips}>
            {characterProfile.titles.map((title) => (
              <TitleChip key={title.id} title={title} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            Equipamento Atual
          </Text>
          {characterProfile.equipment.map((item) => (
            <EquipmentItem key={item.id} equipment={item} />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 20 },
  settings: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  settingsIcon: { fontSize: 18 },
  pressed: { opacity: 0.65 },
  hero: { alignItems: "center", gap: 6 },
  avatarRing: {
    padding: 4,
    borderRadius: 70,
    backgroundColor: colors.purple,
  },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  name: {
    marginTop: 8,
    fontFamily: fonts.extrabold,
    fontSize: 26,
    lineHeight: 32,
    color: colors.text,
  },
  characterClass: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.purple,
  },
  levelBadge: {
    marginTop: 4,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.orange,
  },
  levelText: {
    fontFamily: fonts.bold,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  cardLabel: {
    fontFamily: fonts.semibold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.muted,
  },
  xp: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.text,
  },
  divider: { height: 1, backgroundColor: colors.border },
  stat: { gap: 2 },
  statValue: { fontFamily: fonts.extrabold, fontSize: 15, lineHeight: 19 },
  section: { gap: 10 },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    lineHeight: 20,
    color: colors.text,
  },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
