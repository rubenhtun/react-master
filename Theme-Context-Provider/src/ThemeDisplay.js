// ThemeDisplay.js
import React, { useContext } from "react";
import { Theme } from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";

export default function ThemeDisplay() {
  // Use The Value Of Context Provider
  const { themeColor } = useContext(Theme);

  return (
    <div
      style={{
        backgroundColor: themeColor === "light" ? "#fff" : "#000",
        color: themeColor === "light" ? "#000" : "#fff",
        minWidth: "100vh",
        minHeight: "100vh",
      }}
    >
      <ThemeToggler />
    </div>
  );
}
