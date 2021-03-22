import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Article from "../components/ArticleCard";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width:"800px",
  },
}));

const ArticlesList = (articlesReceived) => {
  const articles = articlesReceived.articles;

  return (
    <div>
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

function HomePage() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const articles = await axios.get("http://localhost:4000/articles");
      setIsLoading(false);
      setArticles(articles.data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? <CircularProgress /> : <ArticlesList articles={articles} />}
    </div>
  );
}

export default HomePage;
