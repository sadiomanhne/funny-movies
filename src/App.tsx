import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ShareVideo from "./pages/ShareVideo";
import IMovie from "./types";
import { DataContextProvider } from "./contexts/movie";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  return (
    <DataContextProvider value={{ movies, setMovies }}>
      <Router>
        <Layout>
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
        </Layout>
      </Router>
    </DataContextProvider>
  );
}

export default App;
