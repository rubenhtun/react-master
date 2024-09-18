// ThemeContext.js
import React, { createContext, useState } from "react";

// Create Context
const Theme = createContext();

export default function ThemeProvider({ children }) {
  // Set Initial Theme Color Value
  const [themeColor, setThemeColor] = useState("light");

  // Function For Theme Change Button
  const changeTheme = () => {
    setThemeColor(themeColor === "light" ? "dark" : "light");
  };

  return (
    <Theme.Provider value={{ themeColor, changeTheme }}>
      {children}
    </Theme.Provider>
  );
}

export { Theme };
