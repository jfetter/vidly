import React, { Component } from "react";
class SortableHeader extends Component {
  renderSortIcon = (header, currentSort) => {
    let icon =
      header.value && currentSort.column === header.value ? (
        <i
          className={
            currentSort.order == "asc"
              ? "fa fa-chevron-up"
              : "fa fa-chevron-down"
          }
        />
      ) : null;
    return icon;
  };
  raiseSort = (column, currentSort) => {
    let order =
      currentSort.order === "desc" || column.value !== currentSort.column
        ? "asc"
        : "desc";
    let sortObj = { order: order, column: column.value };
    this.props.onSort(sortObj);
  };
  render() {
    const { headers, currentSort } = this.props;
    return (
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} onClick={() => this.raiseSort(header, currentSort)}>
              {this.renderSortIcon(header, currentSort)}
              {header.display}
              {header.icon ? <i className={header.icon} /> : null}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default SortableHeader;
