import React from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

const MoviesTable = ({ movies, currentSort, headers, onSort }) => {
  return (
    <Table
      data={movies}
      currentSort={currentSort}
      headers={headers}
      onSort={onSort}
    />
  );
};

export default MoviesTable;
