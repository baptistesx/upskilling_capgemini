import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import AdminPage from "./views/AdminPage";
import ArticlePage from "./views/ArticlePage";
import NavBar from "./components/NavBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <NavBar />

        <Switch>
          <Route path="/articles/:articleId/:isAdmin">
            <ArticlePage />
          </Route>

          <Route path="/:isAdmin">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
