import React, { Component } from "react";
import "../services/fakeGenreService";
import LikeHeart from "./common/likeHeart";

class Movie extends Component {
  state = {};
  //   constructor(props) {
  //     super(props);
  //     //this.movie = this.movie.bind(this);
  //     //this.onDelete = this.onDelete.bind(this);
  //   }
  render() {
    const { movieInfo: movie, onDelete } = this.props;
    return (
      <tr>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <LikeHeart
            like={movie.like}
            toggleLike={() => this.props.toggleLike(movie.like)}
          />
        </td>
        <td>
          <a className="btn btn-sm btn-danger text-white" onClick={onDelete}>
            Delete
          </a>
        </td>
      </tr>
    );
  }
}

export default Movie;
