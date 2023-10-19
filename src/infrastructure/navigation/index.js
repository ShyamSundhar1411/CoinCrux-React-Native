import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
export const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
