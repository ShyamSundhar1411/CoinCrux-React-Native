import React from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../../../components/styles/global.styles";
import { HomeScreenView } from "../components/styles/home.styles";
import { SearchBarComponent } from "../components/SearchBarComponent";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <SearchBarComponent />
    </SafeAreaView>
  );
};
