import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Gallery from "./Gallery";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
