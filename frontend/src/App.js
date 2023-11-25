import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from './layouts/admin/admin';
import Dashboard from './layouts/dashboard/dashboard';
import Login from './layouts/login/login';
import Signin from './layouts/singnin/Signin';
import Stage from './layouts/stage/stage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
