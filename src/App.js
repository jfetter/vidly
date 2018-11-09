import React, { Component } from "react";
import "./App.css";
import MovieList from "./components/movieList";

class App extends Component {
  render() {
    return (
      <main className="container">
        <div>
          <MovieList />
        </div>
      </main>
    );
  }
}

export default App;
