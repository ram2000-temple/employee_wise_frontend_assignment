// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UserList from './components/UserList';
// import EditUser from './components/EditUser';
import Header from './components/Header';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check if user is logged in
  return token ? children : <Navigate to="/login" replace />; // Redirect if not logged in
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
        {/* <Route path="/edit/:id" element={<PrivateRoute><EditUser /></PrivateRoute>} /> */}
        <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect unknown routes */}
      </Routes>
    </Router>
  );
};

export default App;
