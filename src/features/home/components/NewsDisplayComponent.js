import React, { useContext } from "react";
import { HeadingText, NewsDisplayContainer } from "./styles/home.styles";
import { newsItems } from "../../../data/newsData";
import { CarouselComponent } from "./NewsCarouselComponent";
import { NewsContext } from "../../../services/news/news.context";
export const NewsDisplayComponent = () => {
  const { newsData } = useContext(NewsContext);
  return (
    <NewsDisplayContainer>
      <HeadingText>Latest News</HeadingText>
      <CarouselComponent data={newsData} />
    </NewsDisplayContainer>
  );
};
