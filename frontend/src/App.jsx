import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./Pages/HomePage";
import NotesPage from "./Pages/NotesPage";

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
