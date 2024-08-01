import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./Pages/HomePage";
import Notes from "./components/Notes/Notes";
import './App.css'


const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:groupId" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
