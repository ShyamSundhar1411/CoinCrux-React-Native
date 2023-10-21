import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { lightTheme, darkTheme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation";
import {
  ThemeContextProvider,
  ThemeContext,
} from "./src/infrastructure/theme/theme.services";
export default function App() {
  return (
    <>
      <ThemeContextProvider lightTheme={lightTheme} darkTheme={darkTheme}>
        <Navigation />
        <ExpoStatusBar style="auto" />
      </ThemeContextProvider>
    </>
  );
}
