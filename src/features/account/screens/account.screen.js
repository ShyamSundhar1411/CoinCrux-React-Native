import React from "react";
import { AccountScreenView } from "../components/styles/account.styles";
import { SafeAreaView, Text } from "react-native";
import { styles } from "../../../components/styles/global.styles";

export const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <AccountScreenView>
        <Text>Account Screen</Text>
      </AccountScreenView>
    </SafeAreaView>
  );
};
