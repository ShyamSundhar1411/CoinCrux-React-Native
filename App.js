import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "react-native-paper";
import { theme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
