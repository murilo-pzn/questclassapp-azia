import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BenefitCard } from "../components/BenefitCard";
import { CoinsPill } from "../components/CoinsPill";
import { ScreenContainer } from "../components/ScreenContainer";
import { ScreenTitle } from "../components/ScreenTitle";
import { benefits } from "../mocks/benefits";
import { player } from "../mocks/player";
import { colors, fonts } from "../theme";
import { Benefit } from "../types/domain";
import { showMessage } from "../utils/showMessage";

export function TavernScreen() {
  function handleRedeem(benefit: Benefit) {
    if (player.coins < benefit.cost) {
      showMessage(
        "Moedas insuficientes",
        `Você precisa de ${benefit.cost} moedas para resgatar "${benefit.title}".`,
      );
      return;
    }

    showMessage(
      "Pedido enviado",
      `Você resgatou "${benefit.title}" por ${benefit.cost} moedas. O Mestre será notificado para aprovar.`,
    );
  }

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content}>
        <ScreenTitle
          title="Taverna da Guilda"
          subtitle="Melhore sua jornada com benefícios"
          right={<CoinsPill coins={player.coins} />}
        />
        <View style={styles.grid}>
          {benefits.map((benefit) => (
            <View key={benefit.id} style={styles.cell}>
              <BenefitCard
                benefit={benefit}
                onRedeem={() => handleRedeem(benefit)}
              />
            </View>
          ))}
          <View style={styles.cell}>
            <View style={styles.placeholder}>
              <Text style={styles.emoji}>🍺</Text>
              <Text style={styles.placeholderText}>
                Novos consumíveis em breve
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 20 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  // Duas colunas: cada célula ocupa um pouco menos que a metade da linha.
  cell: { flexBasis: "47%", flexGrow: 1 },
  placeholder: {
    flex: 1,
    minHeight: 150,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.border,
  },
  emoji: { fontSize: 28, opacity: 0.5 },
  placeholderText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    color: colors.muted,
  },
});
