import React, { useEffect, useState } from "react";
import API from "../services/api";
import TaskCard from "../components/TaskCard";
import Navbar from "../components/Navbar";

function UserDashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data || []);
  };

  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  const total = tasks.length;
  const done = tasks.filter(t => t.status === "done").length;
  const pending = tasks.filter(t => t.status !== "done").length;
  const overdue = tasks.filter(
    t =>
      t.deadline &&
      new Date(t.deadline).getTime() < new Date().setHours(0, 0, 0, 0) &&
      t.status !== "done"
  ).length;

  return (
    <div className="container">
      <Navbar />

      <h2>👤 User Dashboard</h2>

      <div className="stats">
        <div className="card">Total: {total}</div>
        <div className="card">Completed: {done}</div>
        <div className="card">Pending: {pending}</div>
        <div className="card">Overdue: {overdue}</div>
      </div>

      <h3>Your Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks assigned</p>
      ) : (
        tasks.map(task => (
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

export default UserDashboard;