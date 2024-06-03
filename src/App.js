
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Option1 from "./components/ComponentA";
import Option2 from "./components/ComponentB";
import Option3 from "./components/ComponentC";
import Option4 from "./components/ComponentD";
import Option5 from "./components/ComponentE";
import Option6 from "./components/ComponentF";
import Option7 from "./components/ComponentG";
import Option8 from "./components/ComponentH";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="a/option1" element={<Option1 />} />
          <Route path="a/option2" element={<Option2 />} />

          <Route path="b/option1" element={<Option3 />} />
          <Route path="b/option2" element={<Option4 />} />

          <Route path="c/option1" element={<Option5 />} />
          <Route path="c/option2" element={<Option6 />} />

          <Route path="d/option1" element={<Option7 />} />
          <Route path="d/option2" element={<Option8 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
