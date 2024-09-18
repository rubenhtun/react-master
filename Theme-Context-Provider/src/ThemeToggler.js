// ThemeToggler.js
import React, { useContext } from "react";
import { Theme } from "./ThemeContext";

export default function ThemeToggler() {
  // Use The Value Of Context Provider
  const { changeTheme } = useContext(Theme);

  return (
    <div
      style={{
        width: "1200px",
        margin: "0 auto",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "1.5rem",
      }}
    >
      <i class="fa-solid fa-bars"></i>
      <i className="fa-solid fa-toggle-on" onClick={changeTheme}></i>
    </div>
  );
}
