import React from "react";
import SortableHeader from "./sortableHeader";
import TableBody from "./tableBody";
// const LikeHeart = ({ like, toggleLike }) => {
//     return (
const Table = ({ data, currentSort, headers, onSort }) => {
  return (
    <table className="table table-striped">
      <SortableHeader
        headers={headers}
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableBody contents={data} headers={headers} />
    </table>
  );
};

export default Table;
