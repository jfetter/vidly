import React, { Component } from "react";

class TableBody extends Component {
  renderCell = (item, header) => {
    let content = header.rendContent
      ? header.rendContent(item)
      : header.value && item[header.value]
      ? item[header.value]
      : "";
    return content;
  };
  render() {
    const { headers, contents } = this.props;
    return (
      <tbody>
        {contents.map((item, index) => (
          <tr key={index}>
            {headers.map((header, index) => (
              <td key={index}>{this.renderCell(item, header)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
