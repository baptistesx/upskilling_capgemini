import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "800px",
  },
}));

function ArticlePage() {
  const classes = useStyles();
  let { articleId } = useParams();

  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const articles = await axios.get("http://localhost:4000/articles/");

      const myArticle = articles.data.find(
        (articlee) => articlee.id === articleId
      );
      console.log("myarticle", myArticle);
      setArticle(myArticle);
    };
    fetchData();
  });

  return (
    <div className={classes.root}>
      <Typography variant="h2">{article.title}</Typography>
      <Typography variant="h3">{article.subTitle}</Typography>
      <Typography variant="h3">{article.date}</Typography>
      <Typography variant="h2">{article.body}</Typography>
    </div>
  );
}

export default ArticlePage;
