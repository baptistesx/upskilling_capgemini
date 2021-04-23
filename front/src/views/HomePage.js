import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Article from "../components/ArticleCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography, Fab, Button, TextField, Box } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import { useParams } from "react-router";
import AddIcon from "@material-ui/icons/Add";
import { Formik } from "formik";
import axios from "axios";
import RemoveIcon from "@material-ui/icons/Remove";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "800px",
  },
}));

const ArticlesList = ({ articlesList, onDelete }) => {
  // const articles = articlesList.articles;

  return (
    <div>
      {articlesList.map((article) => (
        <Article key={article.id} article={article} onDelete={onDelete} />
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
  const [showNewArticleForm, setShowNewArticleForm] = useState(false);

  const fetchData = async () => {
    return await fetch("http://127.0.0.1:6868/articles")
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles);
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

  const addNewArticle = async (values) => {
    const response = await axios.post("http://127.0.0.1:6868/articles", values);
    console.log(response);
  };

  useEffect(() => {
    console.log("feeeetch");
    fetchData();
  }, [isLoading]);

  // const handleSubmit = (val) => {
  //   console.log(val);
  // };
  const handleDelete = async (articleId) => {
    setIsLoading(true);

    console.log(`delete ${articleId}`);
    const response = await axios.delete(
      `http://127.0.0.1:6868/articles/${articleId}`
    );
    console.log(response);
    setIsLoading(false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2">Liste des articles</Typography>

      <SearchBar input={input} onChange={updateInput} />

      {isLoading ? (
        <CircularProgress />
      ) : (
        <ArticlesList articlesList={articlesList} onDelete={handleDelete} />
      )}

      {showNewArticleForm ? (
        <Formik
          initialValues={{ title: "", subtitle: "", author: "", body: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.title) {
              errors.title = "Veuillez entrer un titre";
            }

            if (!values.subtitle) {
              errors.subtitle = "Veuillez entrer un sous titre";
            }

            if (!values.author) {
              errors.author = "Veuillez entrer l'auteur";
            }

            if (!values.body) {
              errors.body = "Veuillez entrer le corps de l'article";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setIsLoading(true);

            addNewArticle(values).then((response) => {
              // const newArticlesList = articlesList.slice();
              // newArticlesList.push();
              // console.log("newwww", newArticlesList);
              // setArticlesList(newArticlesList);
              setIsLoading(false);
              resetForm({ title: "", subtitle: "", author: "", body: "" });
              setSubmitting(false);
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column">
                <TextField
                  variant="outlined"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pseudo}
                  label="Titre"
                />
                {errors.title && touched.title && errors.title}
                <TextField
                  variant="outlined"
                  type="text"
                  name="subtitle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subtitle}
                  label="Sous-titre"
                />
                {errors.subtitle && touched.subtitle && errors.subtitle}

                <TextField
                  variant="outlined"
                  type="text"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                  label="Auteur"
                />
                {errors.author && touched.author && errors.author}

                <TextField
                  variant="outlined"
                  type="text"
                  name="body"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                  label="Corps de l'article"
                  multiline
                  rows={10}
                />
                {errors.body && touched.body && errors.body}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onSubmit={handleSubmit}
                >
                  Commenter
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      ) : null}

      {isAdminBool ? (
        showNewArticleForm ? (
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              setShowNewArticleForm(false);
            }}
          >
            <RemoveIcon />
          </Fab>
        ) : (
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              setShowNewArticleForm(true);
            }}
          >
            <AddIcon />
          </Fab>
        )
      ) : null}
    </div>
  );
}

export default HomePage;
