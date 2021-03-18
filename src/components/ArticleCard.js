import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import { Card, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button } from "@material-ui/core";

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

function ArticleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container className={classes.grid}>
          <Grid item>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.subTitle}
            </Typography>
          </Grid>
          <Grid item className={classes.body}>
            <Typography variant="body2" component="p">
              {props.body}
            </Typography>
          </Grid>
        </Grid>
        <CardActions style={{ justifyContent: "right" }}>
          <Button size="small">Lire l'article</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
