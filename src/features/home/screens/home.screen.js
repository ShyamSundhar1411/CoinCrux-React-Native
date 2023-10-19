import React from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../../../components/styles/global.styles";
import { SearchBarComponent } from "../components/SearchBarComponent";
import { CategoryDisplayComponent } from "../components/CategoryDisplayComponent";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <SearchBarComponent />
      <CategoryDisplayComponent />
    </SafeAreaView>
  );
};
