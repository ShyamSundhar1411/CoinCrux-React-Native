import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ThemeText } from "../../../components/styles/global.styles";
import { categoryData } from "../../../data/categoryData";
import {
  CategoryDisplayContainer,
  HeadingText,
  CategoryListContainer,
} from "./styles/home.styles";
import { CategoryTileComponent } from "./CategoryTileComponent";
import { Spacer } from "../../../components/Spacer";
export const CategoryDisplayComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const renderCategories = () => {
    const dataRendered = expanded ? categoryData : categoryData.slice(0, 4);
    return (
      <FlatList
        nestedScrollEnabled={true}
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
    <CategoryDisplayContainer>
      <HeadingText>Categories</HeadingText>
      <CategoryListContainer>
        {renderCategories()}
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <ThemeText>{expanded ? "View Less ▲" : "View All ▼"}</ThemeText>
        </TouchableOpacity>
      </CategoryListContainer>
    </CategoryDisplayContainer>
  );
};
