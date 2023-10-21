import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Navigation } from "./src/infrastructure/navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
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
