import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./components/AppRouter";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();
