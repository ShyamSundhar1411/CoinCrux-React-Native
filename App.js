import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
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
