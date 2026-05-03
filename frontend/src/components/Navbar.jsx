import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h3>🚀 Team Task Manager</h3>

      <div>
        <button onClick={() => navigate("/admin-dashboard")}>
          Dashboard
        </button>

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;