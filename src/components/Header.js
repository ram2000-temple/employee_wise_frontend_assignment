// src/components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation prompt before logout
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
      localStorage.removeItem("token"); // Clear token
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 shadow">
      <h2 style={{ color: "#4285f4" }}>Admin Panel</h2>
      <nav>
        <Link to="/users" className="btn btn-outline-primary mx-2">
          Users
        </Link>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
