import React from "react";
import "./css/App.css";
import { Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
      </>
    );
  }
}

export default App;
