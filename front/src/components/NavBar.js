import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "35px",
    display: "flex",
    flexDirection: "row",
    width: "800px",
  },
}));

function LinkButton({ title, link }) {
  return (
    <div>
      <Button
        href={link}
        onClick={() => {
          console.log({ title } + " click");
        }}
      >
        {title}
      </Button>
    </div>
  );
}

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinkButton title="Accueil" link="/false" />
      <LinkButton title="Accueil admin" link="/true" />
    </div>
  );
}

export default NavBar;
