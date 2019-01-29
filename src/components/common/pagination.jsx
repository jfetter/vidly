import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount <= 1) return null;
  const pages = _.range(1, pagesCount + 1) || [];
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {
              currentPage > 1 ? onPageChange(currentPage - 1) : null;
            }}
          >
            Previous
          </a>
        </li>
        {pages.map(pg => {
          return (
            <li
              className={pg === currentPage ? "page-item active" : "page-item"}
              key={pg}
            >
              <a className="page-link" onClick={() => onPageChange(pg)}>
                {pg}
              </a>
            </li>
          );
        })}

        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {
              currentPage < pagesCount ? onPageChange(currentPage + 1) : null;
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func
};

export default Pagination;
