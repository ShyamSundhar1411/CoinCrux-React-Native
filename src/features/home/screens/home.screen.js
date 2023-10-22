import React, { useEffect, useContext } from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../../../components/styles/global.styles";
import { SearchBarComponent } from "../components/SearchBarComponent";
import { CategoryDisplayComponent } from "../components/CategoryDisplayComponent";
import { NewsContext } from "../../../services/news/news.context";
import { NewsDisplayComponent } from "../components/NewsDisplayComponent";
import { Loader } from "../../../components/Loader";

export const HomeScreen = () => {
  const { isLoading, newsData } = useContext(NewsContext);
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <SearchBarComponent />
          <CategoryDisplayComponent />
          <NewsDisplayComponent />
        </>
      )}
    </SafeAreaView>
  );
};
