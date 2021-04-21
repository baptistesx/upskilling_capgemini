import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Article from "../components/ArticleCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography, Fab } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import { useParams } from "react-router";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "800px",
  },
}));

const ArticlesList = (articlesReceived) => {
  const articles = articlesReceived.articles;

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

function HomePage() {
  const { isAdmin } = useParams();
  console.log("isAdmin", isAdmin);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [articlesListDefault, setArticlesListDefault] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [input, setInput] = useState("");
  const isAdminBool = isAdmin === "true";

  const fetchData = async () => {
    return await fetch("http://127.0.0.1:6868/articles")
      .then((response) => response.json())
      .then((articles) => {
        setArticlesList(articles);
        setArticlesListDefault(articles);
        setIsLoading(false);
      });
  };

  const updateInput = async (input) => {
    const filtered = articlesListDefault.filter((article) => {
      return article.title.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setArticlesList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h2">Liste des articles</Typography>

      <SearchBar input={input} onChange={updateInput} />

      {isLoading ? (
        <CircularProgress />
      ) : (
        <ArticlesList articles={articlesList} />
      )}

      {isAdminBool ? (
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      ) : null}
    </div>
  );
}

export default HomePage;
