import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Import Components
import Footer from "./components/common/footer";
import TopAppBar from "./components/common/topappbar/";

// Import Routes and Pages
import { routes } from "./routes";

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <TopAppBar position="sticky" />
      <div className={classes.root}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          {routes.map((page) => (
            <Route key={page.id} path={page.path} exact>
              <div className={classes.body}>{page.body()}</div>
            </Route>
          ))}
          <Route />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  "@keyframes slideInFromLeft": {
    from: {
      transform: "translateY(-100%)",
    },
    to: {
      transform: "translateY(0)",
    },
  },
  body: {
    display: "flex",
    animationName: "$slideInFromLeft",
    animationDuration: "0.5s",
    animationTimingFunction: "ease-out",
  },
}));
