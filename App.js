import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-paper";
import { theme } from "./src/infrastructure/theme/index";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Text>Open up App.js to start working on your app!</Text>
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
