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

function AdminPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">AdminPage</Typography>
    </div>
  );
}

export default AdminPage;
