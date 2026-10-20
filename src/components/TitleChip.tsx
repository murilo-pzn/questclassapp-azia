import { StyleSheet, Text, View } from "react-native";
import { CharacterTitle } from "../types/domain";
import { colors, fonts } from "../theme";

type TitleChipProps = {
  title: CharacterTitle;
};

export function TitleChip({ title }: TitleChipProps) {
  const color = colors[title.tone];

  return (
    <View style={[styles.chip, { borderColor: color }]}>
      <Text style={[styles.text, { color }]}>{title.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  text: { fontFamily: fonts.semibold, fontSize: 12, lineHeight: 15 },
});
