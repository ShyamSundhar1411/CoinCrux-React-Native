import React from "react";
import { Text } from "react-native-paper";
import { MyFeedScreenView } from "../components/styles/feed.styles";
import { SafeAreaView } from "react-native";
import { styles } from "../../../components/styles/global.styles";

export const MyFeedScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <MyFeedScreenView>
        <Text>My Feed Screen</Text>
      </MyFeedScreenView>
    </SafeAreaView>
  );
};
