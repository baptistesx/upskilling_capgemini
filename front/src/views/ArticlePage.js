import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Formik } from "formik";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "800px",
  },
}));

const ArticleComment = (commentReceived) => {
  const comment = commentReceived.comment;
  console.log("comment", comment);
  return (
    <Card>
      <CardContent>
        <Typography>{comment.author}</Typography>
        <Typography>{comment.date}</Typography>
        <Typography>{comment.body}</Typography>
      </CardContent>
    </Card>
  );
};

const ArticlePage = () => {
  const classes = useStyles();
  let { articleId } = useParams();

  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      const response = await axios.get(
        `http://127.0.0.1:6868/articles/${articleId}`
      );

      console.log("article", response.data);
      setArticle(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [articleId]);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <Typography variant="h2">{article.title}</Typography>
          <Typography variant="h3">{article.subTitle}</Typography>
          <Typography variant="h5">{article.date}</Typography>
          <Typography variant="body1">{article.body}</Typography>
          <Typography variant="h3">Commentaires</Typography>
          <Typography variant="h3">Ajouter un commentaire</Typography>
          {/* <Typography variant="h3">{article.comments[0].author}</Typography> */}
          <Formik
            initialValues={{ pseudo: "", comment: "" }}
            validate={(values) => {
              const errors = {};

              if (!values.pseudo) {
                errors.pseudo = "Veuillez entrer votre pseudo";
              }

              if (!values.comment) {
                errors.comment = "Veuillez entrer un commentaire";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                setSubmitting(false);
              }, 400);
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
                    type="pseudo"
                    name="pseudo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pseudo}
                    label="Pseudo"
                  />
                  {errors.pseudo && touched.pseudo && errors.pseudo}
                  <TextField
                    variant="outlined"
                    type="comment"
                    name="comment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                    label="Nouveau commentaire"
                    multiline
                    rows={4}
                  />
                  {errors.comment && touched.comment && errors.comment}
                  <Button type="submit" disabled={isSubmitting}>
                    Commenter
                  </Button>{" "}
                </Box>
              </form>
            )}
          </Formik>
          {article.comments.map((comment) => (
            <ArticleComment comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
