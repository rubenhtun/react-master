import React from "react";

export default function Item({ item, del }: any) {
  return (
    <>
      <li
        style={{
          padding: "8px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>
          {item.name} - {item.time}
        </span>
        <button onClick={() => del(item.id)}>Delete</button>
      </li>
    </>
  );
}
