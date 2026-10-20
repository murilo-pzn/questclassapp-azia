import { StyleSheet, Text, View } from "react-native";
import { Equipment } from "../types/domain";
import { colors, fonts } from "../theme";

type EquipmentItemProps = {
  equipment: Equipment;
};

export function EquipmentItem({ equipment }: EquipmentItemProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.emoji}>{equipment.emoji}</Text>
      <View style={styles.texts}>
        <Text style={styles.name}>{equipment.name}</Text>
        <Text style={styles.details}>
          {equipment.slot} ({equipment.rarity})
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  emoji: { fontSize: 22 },
  texts: { gap: 2, flexShrink: 1 },
  name: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  details: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 15,
    color: colors.muted,
  },
});
