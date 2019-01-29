import React from "react";

const Dropdown = ({ list, onSelected, currentSelection, nameField }) => {
  return (
    <ul className="list-group">
      {list.map((item, index) => (
        <li
          key={index}
          className={
            currentSelection && currentSelection._id === item._id
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onSelected(item)}
        >
          {item[nameField]}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
