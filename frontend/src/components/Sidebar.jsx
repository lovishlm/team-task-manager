import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  LogOut
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h2>Task Manager</h2>

        <button onClick={() => navigate("/admin-dashboard")}>
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button onClick={() => navigate("/create-project")}>
          <FolderKanban size={18} />
          Create Projects
        </button>

        <button onClick={() => navigate("/create-task")}>
          <CheckSquare size={18} />
          Assign Tasks
        </button>
      </div>

      <div className="sidebar-bottom">
        <button onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;