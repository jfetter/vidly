import React, { Component } from "react";
import Movie from "./movie";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";

class MovieList extends Component {
  state = {
    movies: (getMovies() || []).map(m => {
      m.like = false;
      m.toggleLike = like => {
        like = !like;
      };
      return m;
    })
  };
  render() {
    return this.renderMovieList();
  }
  handleToggleLike = like => {
    like = !like;
    return like;
  };
  handleDeleteMovie = movie => {
    let tmpMovies = this.state.movies.filter(function(item) {
      return item._id !== movie._id;
    });
    this.setState({ movies: tmpMovies });
  };
  toggleLike = id => {
    let tmpMovies = this.state.movies.map(function(item) {
      if (item._id === id) {
        item.like = !item.like;
      }
      return item;
    });
    this.setState({ movies: tmpMovies });
  };
  handlePageClick = pg => {
    let tmpMovies = this.state.movies.filter(function(item) {
      return item;
    });
    this.setState({ movies: tmpMovies });
  };
  renderMovieList = () => {
    if (this.state.movies && this.state.movies.length) {
      return (
        <React.Fragment>
          <span>Showing {this.state.movies.length} movies in the database</span>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <Movie
                  key={movie._id}
                  onDelete={() => this.handleDeleteMovie(movie)}
                  movieInfo={movie}
                  toggleLike={() => this.toggleLike(movie._id)}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            itemsPerPage={5}
            items={[1, 2]}
            pageClick={() => this.handlePageClick()}
          />
        </React.Fragment>
      );
    } else {
      return (
        <h5 className="text-muted text-center mt-5">No Movies Available</h5>
      );
    }
  };
}

export default MovieList;
