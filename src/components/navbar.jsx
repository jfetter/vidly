import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/vidly">
          Vidly
        </Link>
        <Link className="nav-item ml-1" to="/movies">
          Movies
        </Link>
        <Link className="nav-item ml-2" to="/customers">
          Customers
        </Link>
        <Link className="nav-item ml-2" to="/rentals">
          Rentals
        </Link>
      </nav>
    );
  }
}

export default Navbar;
