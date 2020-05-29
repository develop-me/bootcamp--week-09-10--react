import React, { useState, useEffect } from "react";
import axios from "./axios";

const useGetArticles = (initial) => {
  const [articles, setArticles] = useState(initial);

  useEffect(() => {
    axios.get("/blog/articles").then(({ data }) => {
      setArticles(data.data);
    });
  }, []); // make sure to pass in an empty array!

  return [articles, setArticles];
};

export default useGetArticles;
