import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SignInDialog from "./SignInDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "35px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
      <LinkButton title="Accueil" link="/" />

      <TextField
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <SignInDialog />
    </div>
  );
}

export default NavBar;
