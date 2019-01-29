import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MovieList from "./components/movieList";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import MovieDetails from "./components/movieForm";
import { Route, Redirect, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/vidly" component={MovieList} />
            <Route
              path="/movie/:id"
              render={props => <MovieDetails {...props} />}
            />
            <Route path="/movies" component={MovieList} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Redirect from="/" exact to="/movies" />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
