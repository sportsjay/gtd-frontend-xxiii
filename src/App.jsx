import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Footer from "./components/footer";
import TopAppBar from "./components/topappbar/topappbar";

// Import Routes and Pages
import { routes } from "./routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <TopAppBar position="sticky" />
      <div className={classes.root}>
        <Switch>
          {routes.map((page) => (
            <Route key={page.id} path={page.path} component={page.body} exact />
          ))}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
