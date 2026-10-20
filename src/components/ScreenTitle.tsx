import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";

type ScreenTitleProps = {
  title: string;
  subtitle?: string;
  right?: ReactNode;
};

export function ScreenTitle({ title, subtitle, right }: ScreenTitleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.title} accessibilityRole="header">
          {title}
        </Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  texts: { flexShrink: 1, gap: 2 },
  title: {
    fontFamily: fonts.extrabold,
    fontSize: 22,
    lineHeight: 28,
    color: colors.text,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 16,
    color: colors.muted,
  },
});
