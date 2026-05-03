import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  const [form, setForm] = useState({
    name: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/projects", {
      ...form,
      members: []
    });

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Create Project</h2>

        <input
          placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Description"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateProject;