import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

type CoinsPillProps = {
  coins: number;
};

export function CoinsPill({ coins }: CoinsPillProps) {
  return (
    <View style={styles.pill}>
      <Icon name="coins" />
      <Text style={styles.text}>{coins} moedas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.orange,
    backgroundColor: colors.surface,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.orange,
  },
});
