import React, { useContext } from "react";
import { Text } from "react-native-paper";
import { MyFeedScreenView } from "../components/styles/feed.styles";
import { SafeAreaView } from "react-native";
import { styles } from "../../../components/styles/global.styles";
import { FeedComponent } from "../components/FeedCarouselComponent";
import { NewsContext } from "../../../services/news/news.context";

export const MyFeedScreen = () => {
  const { newsData } = useContext(NewsContext);
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <FeedComponent data={newsData} />
    </SafeAreaView>
  );
};
