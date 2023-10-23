import React, { useEffect, useContext } from "react";
import { Text, SafeAreaView, View, SectionList } from "react-native";
import { styles } from "../../../components/styles/global.styles";
import { HeadingText } from "../components/styles/home.styles";
import { SearchBarComponent } from "../components/SearchBarComponent";
import { CategoryDisplayComponent } from "../components/CategoryDisplayComponent";
import { NewsContext } from "../../../services/news/news.context";
import { NewsDisplayComponent } from "../components/NewsDisplayComponent";
import { Loader } from "../../../components/Loader";

export const HomeScreen = () => {
  const { isLoading } = useContext(NewsContext);
  const renderItem = ({ item }) => <View>{item}</View>;
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={{ paddingStart: 10 }}>
      <HeadingText>{title}</HeadingText>
    </View>
  );
  const DATA = [
    {
      title: "",
      data: [<SearchBarComponent key="search" />],
    },
    {
      title: "Categories",
      data: [<CategoryDisplayComponent key="categories" />],
    },
    {
      title: "Latest News",
      data: [<NewsDisplayComponent key="news" />],
    },
  ];
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      )}
    </SafeAreaView>
  );
};
