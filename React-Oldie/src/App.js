import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const User = () => {
  const { name } = useParams();
  return <h1>Profile – {name}</h1>;
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li key="alice">
              <Link to="/user/Alice">Alice</Link>
            </li>
            <li key="bob">
              <Link to="/user/Bob">Bob</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/user/:name" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
