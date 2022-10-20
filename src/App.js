import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome/welcome";
import Name from "./components/name/name";
import Game from "./components/game/game";
import Add from "./components/add/add";
import Leaderboard from "./components/leaderboard/leaderboard";
import Profile from "./components/profile/profile";

const App = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Name name={name} onChange={handleNameChange} />}
          />
          <Route path="/welcome" element={<Welcome name={name} />} />
          <Route path="/game" element={<Game />} />
          <Route path="/add" element={<Add />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
