import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "tytul 1",
    author: "autor 1",
    text:
      "lotem ipsum 1 lotem ipsum 1 lotem ipsum 1 lotem ipsum 1 lotem ipsum 1lotem ipsum 1lotem ipsum 1"
  },
  {
    id: 2,
    title: "tytul 2",
    author: "autor 2",
    text:
      "lotem ipsum 2 lotem ipsum 1 lotem ipsum 1 lotem ipsum 1 lotem ipsum 1lotem ipsum 1lotem ipsum 1"
  },
  {
    id: 3,
    title: "tytul 3",
    author: "autor 3",
    text:
      "lotem ipsum 3 lotem ipsum 1 lotem ipsum 1 lotem ipsum 1 lotem ipsum 1lotem ipsum 1lotem ipsum 1"
  }
];

const HomePage = () => {
  const articleList = articles.map(art => <Article key={art.id} {...art} />);
  return <div>{articleList}</div>;
};

export default HomePage;
