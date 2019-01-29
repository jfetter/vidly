import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import Dropdown from "./common/dropDown";
import _ from "lodash";
const allGenre = { name: "All Genres", _id: null };
import LikeHeart from "./common/likeHeart";
import { Link } from "react-router-dom";

class MovieList extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
    genres: [],
    selectedGenre: allGenre,
    movies: [],
    sortBy: { column: "title", order: "asc" },
    headers: [
      {
        display: "Title",
        value: "title",
        rendContent: m => <Link to={m.to}>{m.title}</Link>
      },
      { display: "Genre", value: "genre_name" },
      { display: "Rental Rate", value: "dailyRentalRate" },
      { display: "Stock Count", value: "numberInStock" },
      {
        display: "",
        value: "like",
        icon: "fa fa-heart-o",
        rendContent: m => (
          <LikeHeart
            toggleLike={() => {
              this.handleToggleLike(m._id);
            }}
            like={m.like}
          />
        )
      },
      { display: "", value: "delete_btn" }
    ]
  };
  componentDidMount() {
    this.setState({
      movies: (getMovies() || []).map(m => {
        m.genre_name = m.genre.name;
        m.delete_btn = (
          <a
            className="btn btn-sm btn-danger text-white"
            onClick={() => this.handleDeleteMovie(m)}
          >
            Delete
          </a>
        );
        m.to = `/movie/${m._id}`;
        m.like = false;
        return m;
      }),
      genres: [allGenre, ...(getGenres() || [])]
    });
  }

  render() {
    return this.renderMovieList();
  }
  handleDeleteMovie = movie => {
    let tmpMovies = this.state.movies.filter(function(item) {
      return item._id !== movie._id;
    });
    this.setState({ movies: tmpMovies });
  };
  handleToggleLike = id => {
    let tmpMovies = this.state.movies.map(function(item) {
      if (item._id === id) {
        item.like = !item.like;
      }
      return item;
    });
    this.setState({ movies: tmpMovies });
  };
  handlePageChange = pg => {
    this.setState({ currentPage: pg });
  };
  handleSelectGenre = genre => {
    this.setState({ selectedGenre: genre });
  };
  handleSort = sortObj => {
    this.setState({
      sortBy: sortObj
    });
  };
  renderMovieList = () => {
    let tmpMovies = [...this.state.movies];
    if (this.state.selectedGenre && this.state.selectedGenre._id) {
      tmpMovies = tmpMovies.filter(
        movi => (movi.genre || {})._id === this.state.selectedGenre._id
      );
    }
    let displayCount = tmpMovies.length;
    let totalPages = Math.ceil(tmpMovies.length / this.state.pageSize);
    let pg = totalPages > 1 ? this.state.currentPage : 1;

    let sliceFrom = this.state.pageSize * pg - this.state.pageSize;
    let sliceTo = sliceFrom + this.state.pageSize;
    tmpMovies = _.orderBy(
      tmpMovies,
      [this.state.sortBy.column],
      [this.state.sortBy.order]
    ).slice(sliceFrom, sliceTo);
    if (this.state && this.state.movies && this.state.movies.length) {
      return (
        <React.Fragment>
          <div className="row mt-2">
            <div className="col-xs-3 col-lg-2 ml-2">
              <Dropdown
                nameField="name"
                list={this.state.genres}
                onSelected={genre => this.handleSelectGenre(genre)}
                currentSelection={this.state.selectedGenre}
              />
            </div>
            <div className="col-xs-9">
              <span>
                Showing {tmpMovies.length} of
                {" " + this.state.movies.length} movies
              </span>
              <MoviesTable
                headers={this.state.headers}
                currentSort={this.state.sortBy}
                onSort={sortBy => this.handleSort(sortBy)}
                movies={tmpMovies}
              />
              <Pagination
                currentPage={this.state.currentPage}
                itemsCount={displayCount}
                pageSize={this.state.pageSize}
                onPageChange={pg => this.handlePageChange(pg)}
              />
            </div>
          </div>
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
