import React from "react";
import { HeadingText, NewsDisplayContainer } from "./styles/home.styles";
import { newsItems } from "../../../data/newsData";
export const NewsDisplayComponent = () => {
  return (
    <NewsDisplayContainer>
      <HeadingText>Latest News</HeadingText>
    </NewsDisplayContainer>
  );
};
