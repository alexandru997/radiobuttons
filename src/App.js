import React from "react";
import List from "./components/List";
import "./App.css";
const items = [
  {
    key: "09:00-18:00",
    value: "09:00-18:00",
    name: "9-18",
  },
  { key: "10:00-19:00", value: "10:00-19:00", name: "9-18" },
  {
    key: "08:00-17:00",
    value: "08:00-17:00",
    name: "9-18",
  },
  {
    key: "Specific",
    value: "Specific Time",
    name: "9-18",
  },
];

function App() {
  const [activeItem, setActiveItem] = React.useState(items[0].key);
  const [visibilItem, setVisibilItem] = React.useState();
  return (
    <div className="lists">
      <List
        items={items}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <div className="specific">
        <h2>asdafasf</h2>
      </div>
    </div>
  );
}

export default App;
