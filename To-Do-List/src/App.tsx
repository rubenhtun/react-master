import React, { useState } from "react";
import "./App.css";
import List from "./List";
import Item from "./Item";

interface Item {
  id: number;
  name: string;
  time: string;
}

function App() {
  const [showForm, setShowForm] = useState(false);

  const [items, setItems] = useState<Item[]>([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const addList = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const updateItem = { id: items.length, name: task, time: time };
    setItems([...items, updateItem]);
    setTask("");
    setTime("");
  };

  const del = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <div
        style={{
          width: "100%",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>To-Do-List</h2>
        <span
          style={{
            width: "35px",
            height: "35px",
            fontSize: "1.5rem",
            borderRadius: "50%",
            backgroundColor: showForm ? "#dc3545" : "deeppink",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "x" : "+"}
        </span>
      </div>
      {showForm && (
        <form
          action=""
          style={{
            height: "80px",
            marginBottom: "10px",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <input
            style={{ padding: "3px" }}
            type="text"
            value={task}
            onChange={handleTaskChange}
            placeholder="Task Name"
          />
          <input
            style={{ padding: "3px" }}
            type="text"
            value={time}
            onChange={handleTimeChange}
            placeholder="Set Time"
          />
          <button style={{ width: "50px" }} onClick={addList}>
            Insert
          </button>
        </form>
      )}
      <List>
        {items.map((item) => (
          <Item key={item.id} item={item} del={del} />
        ))}
      </List>
    </div>
  );
}

export default App;
