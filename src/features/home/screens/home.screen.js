import React from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../../../components/styles/global.styles";
import { HomeScreenView } from "../components/styles/home.styles";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <HomeScreenView>
        <Text>Home Screen</Text>
      </HomeScreenView>
    </SafeAreaView>
  );
};
