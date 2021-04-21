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
const useStyles = makeStyles((theme) => ({
  root: {
    width: "450px",
    margin: "20px",
  },
  grid: { display: "flex", flexDirection: "row", padding: "10px" },
  body: {
    height: "40px",
    overflow: "hidden",
  },
}));

const ArticleCard = ({ article }) => {
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
                <IconButton>
                  <EditIcon />
                </IconButton>
              ) : null}
              {isAdminBool ? (
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              ) : null}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {article.subTitle}
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
