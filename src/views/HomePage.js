import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import { Card, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button } from "@material-ui/core";
import Article from "../components/ArticleCard";
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "column",
    // width:"800px",
  },
}));

const articles = [
  {
    title: "titre",
    subTitle: "sous titre",
    body:
      "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur.",
  },
  {
    title: "titre",
    subTitle: "sous titre",
    body:
      "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur.",
  },
  {
    title: "titre",
    subTitle: "sous titre",
    body:
      "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur.",
  },
];

function ArticlesList() {
  return (
    <div>
      {articles.map((article) => (
        <Article
          title={article.title}
          subTitle={article.subTitle}
          body={article.body}
        />
      ))}
    </div>
  );
}

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />

      <ArticlesList />
    </div>
  );
}

export default HomePage;
