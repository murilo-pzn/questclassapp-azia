import { Pressable, StyleSheet, Text, View } from "react-native";
import { Benefit } from "../types/domain";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

type BenefitCardProps = {
  benefit: Benefit;
  onRedeem: () => void;
};

export function BenefitCard({ benefit, onRedeem }: BenefitCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        {/* "33" no fim da cor hexadecimal deixa o fundo translúcido */}
        <View style={[styles.iconBox, { backgroundColor: `${benefit.color}33` }]}>
          <Text style={styles.emoji}>{benefit.emoji}</Text>
        </View>
        <View style={styles.price}>
          <Icon name="coins" />
          <Text style={styles.priceText}>{benefit.cost}</Text>
        </View>
      </View>

      <View style={styles.texts}>
        <Text style={styles.title}>{benefit.title}</Text>
        <Text style={styles.description}>{benefit.description}</Text>
      </View>

      <Pressable
        onPress={onRedeem}
        accessibilityRole="button"
        accessibilityLabel={`Resgatar ${benefit.title} por ${benefit.cost} moedas`}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Resgatar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 14,
    gap: 12,
    justifyContent: "space-between",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: { fontSize: 20 },
  price: { flexDirection: "row", alignItems: "center", gap: 4 },
  priceText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.orange,
  },
  texts: { gap: 4 },
  title: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 15,
    color: colors.muted,
  },
  button: {
    minHeight: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.purple,
  },
  pressed: { opacity: 0.65 },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    lineHeight: 16,
    color: colors.purple,
  },
});
