import React, { useEffect, useState } from "react";
import API from "../services/api";
import TaskCard from "../components/TaskCard";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  // ✅ get role
  const role = localStorage.getItem("role");

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/tasks/${id}`, { status });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;
  const pending = tasks.filter((t) => t.status === "todo").length;

  return (
    <div className="container">
      <Navbar />

      <h2>Dashboard ({role})</h2>

      {/* ✅ Only admin sees create buttons */}
      {role === "admin" && (
        <div className="actions">
          <button onClick={() => navigate("/create-project")}>
            + Create Project
          </button>

          <button onClick={() => navigate("/create-task")}>
            + Create Task
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="stats">
        <div className="card">Total: {total}</div>
        <div className="card">Done: {done}</div>
        <div className="card">Pending: {pending}</div>
      </div>

      {/* Projects */}
      <h3>Projects</h3>
      {projects.length === 0 ? (
        <p>No projects</p>
      ) : (
        projects.map((p) => (
          <ProjectCard key={p._id} project={p} />
        ))
      )}

      {/* Tasks */}
      <h3>Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            updateStatus={updateStatus}
          />
        ))
      )}
    </div>
  );
}

export default Dashboard;