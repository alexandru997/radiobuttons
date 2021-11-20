import React from "react";
function List({ items, setActiveItem, activeItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li
            key={item.key}
            className={activeItem === item.key ? "active" : ""}
          >
            <input
              type="radio"
              value={item.value}
              name={item.name}
              onClick={() => setActiveItem(item.key)}
            />
            <label>{item.value}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
