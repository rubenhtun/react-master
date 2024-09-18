// ThemedApp.js
import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

const ThemedApp = () => {
  return (
    <ThemeContext>
      <ThemeDisplay />
    </ThemeContext>
  );
};

export default ThemedApp;
