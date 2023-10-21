import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ThemeText } from "../../../components/styles/global.styles";
import { categoryData } from "../../../data/categoryData";
import {
  CategoryDisplayContainer,
  HeadingText,
  CategoryListContainer,
} from "./styles/home.styles";
import { CategoryTileComponent } from "./CategoryTileComponent";
import { Spacer } from "../../../components/Spacer";
import { useTheme } from "../../../infrastructure/theme/theme.services";
export const CategoryDisplayComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const renderCategories = () => {
    const dataRendered = expanded ? categoryData : categoryData.slice(0, 4);
    return (
      <FlatList
        data={dataRendered}
        numColumns={4}
        keyExtractor={(item) => item.name.toString()}
        renderItem={(coin, index) => {
          return <CategoryTileComponent coin={coin} />;
        }}
      />
    );
  };
  return (
    <CategoryDisplayContainer theme={theme}>
      <HeadingText theme={theme}>Categories</HeadingText>
      <CategoryListContainer theme={theme}>
        {renderCategories()}
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <ThemeText theme={theme}>
            {expanded ? "View Less ▲" : "View All ▼"}
          </ThemeText>
        </TouchableOpacity>
      </CategoryListContainer>
    </CategoryDisplayContainer>
  );
};
