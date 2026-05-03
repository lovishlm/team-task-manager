import React from "react";

function TaskCard({ task, updateStatus }) {
  const isOverdue =
    task.deadline &&
    new Date(task.deadline) < new Date() &&
    task.status !== "done";

  return (
    <div className={`card ${isOverdue ? "overdue" : ""}`}>
      <h4>{task.title}</h4>

      <p><strong>Status:</strong> {task.status}</p>

      {task.project && (
        <p><strong>Project:</strong> {task.project.name}</p>
      )}

      {task.deadline && (
        <p>
          <strong>Deadline:</strong>{" "}
          {new Date(task.deadline).toLocaleDateString()}
        </p>
      )}

      {isOverdue && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠ Overdue
        </p>
      )}

      <div>
        <button onClick={() => updateStatus(task._id, "in-progress")}>
          In Progress
        </button>

        <button onClick={() => updateStatus(task._id, "done")}>
          Done
        </button>
      </div>
    </div>
  );
}

export default TaskCard;