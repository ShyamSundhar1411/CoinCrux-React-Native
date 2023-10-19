import React from "react";
import { FlatList } from "react-native";
import { categoryData } from "../../../data/categoryData";
import {
  CategoryDisplayContainer,
  HeadingText,
  CategoryListContainer,
} from "./styles/home.styles";
import { CategoryTileComponent } from "./CategoryTileComponent";

export const CategoryDisplayComponent = () => {
  return (
    <CategoryDisplayContainer>
      <HeadingText>Categories</HeadingText>
      <CategoryListContainer>
        <FlatList
          data={categoryData}
          numColumns={4}
          keyExtractor={(item) => item.name.toString()}
          renderItem={(coin, index) => {
            return <CategoryTileComponent coin={coin} />;
          }}
        />
      </CategoryListContainer>
    </CategoryDisplayContainer>
  );
};
