import { ReactNode } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme";

type ScreenContainerProps = {
  children: ReactNode;
  edges?: Edge[];
};

// Fundo + área segura + largura máxima (para a prévia web ficar com cara de celular).
export function ScreenContainer({
  children,
  edges = ["top", "left", "right"],
}: ScreenContainerProps) {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen} edges={edges}>
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: Platform.OS === "web" ? 390 : 600,
    backgroundColor: colors.background,
  },
});
