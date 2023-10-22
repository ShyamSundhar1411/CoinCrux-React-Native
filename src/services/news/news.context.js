import React, { useState, createContext, useEffect } from "react";
import { fetchDummyNewsRequest, fetchNewsRequest } from "./news.services";

export const NewsContext = createContext();
export const NewsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setIsLoading(true);
    await fetchNewsRequest()
      .then((news) => {
        setNewsData(news);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };
  const fetchDummyNews = () => {
    setIsLoading(true);
    setNewsData([]);
    setTimeout(() => {
      fetchDummyNewsRequest()
        .then((news) => {
          setIsLoading(false);
          setNewsData(news);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    fetchDummyNews();
  }, []);
  return (
    <NewsContext.Provider
      value={{
        isLoading,
        error,
        fetchNews,
        newsData,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
