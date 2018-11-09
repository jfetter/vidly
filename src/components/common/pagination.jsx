import React, { Component } from "react";
class Pagination extends Component {
  makeArrayOfPageNumbers = () => {
    console.log(this.props);
    let pages = [];
    for (let i = 0; i < this.props.items.length; i + this.props.itemsPerPage) {
      pages.push(i);
    }
    return pages;
  };
  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {this.makeArrayOfPageNumbers().map((p, i) => (
            <li className="page-item" key={i}>
              <a
                className={`page-link${p.clicked ? " active" : ""}`}
                onClick={() => this.props.pageClick(p)}
              >
                {i + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
