import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(newsData);
      // return;
    } else if (id == "1") {
      const filteredNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      // return;
    } else {
      const filteredNews = newsData.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, newsData]);

  return (
    <div className="space-y-8">
      {categoryNews.map((newsCard, index) => (
        <NewsCard key={index} newsCard={newsCard} />
      ))}
    </div>
  );
};

export default CategoryNews;
