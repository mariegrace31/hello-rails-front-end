import './App.css';
import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <NavLink to="/greeting" className="greeting">
        Random Greeting
      </NavLink>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
