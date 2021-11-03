import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ShareVideo from "./pages/ShareVideo";

function App() {
  return (
    <Layout>
      <Router>
        <div>
          <Switch>
            <Route path="/share">
              <ShareVideo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Layout>
  );
}

export default App;
