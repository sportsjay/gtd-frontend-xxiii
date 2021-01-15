import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Footer from "./components/footer";
import TopAppBar from "./components/topappbar";

// Import Routes and Pages
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <TopAppBar />
      <Switch>
        {routes.map((page) => (
          <Route key={page.id} path={page.path} component={page.body} exact />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
