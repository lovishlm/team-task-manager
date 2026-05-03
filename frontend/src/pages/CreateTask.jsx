import React, { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateTask() {
  const [form, setForm] = useState({
    title: "",
    project: "",
    assignedTo: "",
    deadline: ""
  });

  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/tasks", form);
    navigate("/admin-dashboard");
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Create Task</h2>

        <input
          placeholder="Task title"
          required
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <select
          required
          onChange={e => setForm({ ...form, project: e.target.value })}
        >
          <option value="">Select Project</option>
          {projects.map(p => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

        <input
          placeholder="Assign User ID"
          required
          onChange={e => setForm({ ...form, assignedTo: e.target.value })}
        />

        {/* ✅ DEADLINE */}
        <input
          type="date"
          required
          onChange={e => setForm({ ...form, deadline: e.target.value })}
        />

        <button>Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;