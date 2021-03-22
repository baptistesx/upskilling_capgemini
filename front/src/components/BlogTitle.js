import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    alignContent: "center",
  },
  title: {textAlign:"center"},
}));

function BlogTitle({ title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
    </div>
  );
}

export default BlogTitle;
