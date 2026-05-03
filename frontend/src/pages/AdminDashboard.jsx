import React, { useEffect, useState } from "react";
import API from "../services/api";
import TaskCard from "../components/TaskCard";
import ProjectCard from "../components/ProjectCard";
import Sidebar from "../components/Sidebar";
import TaskChart from "../components/TaskChart";

function AdminDashboard() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data || []);
  };

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data || []);
  };

  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  const total = tasks.length;
  const done = tasks.filter(t => t.status === "done").length;
  const pending = tasks.filter(t => t.status !== "done").length;

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h2>👑 Admin Dashboard</h2>

        <div className="stats">
          <div className="card">Total Tasks: {total}</div>
          <div className="card">Completed: {done}</div>
          <div className="card">Pending: {pending}</div>
        </div>

        <div className="card" style={{ marginBottom: "20px" }}>
          <h4>Task Overview</h4>
          <TaskChart tasks={tasks} />
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Projects</h3>
          <div style={{ display: "grid", gap: "10px" }}>
            {projects.map(p => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Tasks</h3>
          <div style={{ display: "grid", gap: "10px" }}>
            {tasks.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                updateStatus={updateStatus}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;