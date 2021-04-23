import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import NavBar from "../components/NavBar";
import { Card, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button } from "@material-ui/core";
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "450px",
    margin: "20px",
  },
  grid: { display: "flex", flexDirection: "column", padding: "10px" },
  body: {
    height: "40px",
    overflow: "hidden",
  },
}));

const ArticleCard = ({ article, onDelete }) => {
  const classes = useStyles();
  const history = useHistory();
  const { isAdmin } = useParams();
  const isAdminBool = isAdmin === "true";

  const handleLinkClick = () => {
    // console.log(val);
    history.push(`/articles/${article.articleId}/${isAdmin}`);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container className={classes.grid}>
          <Grid item>
            <Typography variant="h5" component="h2">
              {article.title} {isAdminBool}
              {isAdminBool ? (
                <IconButton onClick={() => onDelete(article.articleId)}>
                  <DeleteIcon />
                </IconButton>
              ) : null}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {article.subTitle}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {format(new Date(article.createdAt), "'Le' PPP à H:m", {
                locale: fr,
              })}
            </Typography>
          </Grid>
          <Grid item className={classes.body}>
            <Typography variant="body2" component="p">
              {article.body}
            </Typography>
          </Grid>
        </Grid>
        <CardActions style={{ justifyContent: "right" }}>
          <Button onClick={handleLinkClick}>Voir plus</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
