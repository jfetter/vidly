import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieDetails extends Component {
  render() {
    console.log(this);
    return <h3>Movie Form {this.props.match.params.id}</h3>;
  }
}

export default MovieDetails;
