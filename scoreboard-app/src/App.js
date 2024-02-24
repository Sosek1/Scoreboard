import "./App.css";
import Scoreboard from "./Scoreboard.js";
import AdminPanel from "./AdminPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="scoreboard" element={<Scoreboard />} />
      </Routes>
    </Router>
  );
}

export default App;
