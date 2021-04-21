import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
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
