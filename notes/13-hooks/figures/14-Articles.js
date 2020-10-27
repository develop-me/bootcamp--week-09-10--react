import { useState, useEffect } from "react";
import useGetArticles from "./useGetArticles";

const Articles = () => {
  // use the custom hook - does all the work for us
  const [articles] = useGetArticles([]);

  // display articles
  return (
    <ul>
      { articles.map(article => (
        <li key={ article.id }>{ article.title }</li>
      )) }
    </ul>
  );
}

export default Articles;
