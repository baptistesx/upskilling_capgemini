import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import NavBar from "../components/NavBar";
import { Card, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button } from "@material-ui/core";
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";

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

const ArticleCard = ({article}) => {
  const classes = useStyles();
  const history = useHistory();
  
  const handleLinkClick = () => {
    history.push("/articles/" + article.id);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container className={classes.grid}>
          <Grid item>
            <Typography variant="h5" component="h2">
              {article.title}
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
          <Link to={`/articles/${article.id}`}>Components</Link>

          {/* <Link to={`${match.url}/articles/${props.id}`}>Lire l'article</Link> */}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
