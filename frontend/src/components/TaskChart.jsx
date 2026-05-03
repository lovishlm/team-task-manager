import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#22c55e", "#4f46e5", "#f59e0b"];

function TaskChart({ tasks }) {
  const data = [
    {
      name: "Done",
      value: tasks.filter(t => t.status === "done").length
    },
    {
      name: "Pending",
      value: tasks.filter(t => t.status === "todo").length
    },
    {
      name: "In Progress",
      value: tasks.filter(t => t.status === "in-progress").length
    }
  ];

  return (
    <PieChart width={300} height={250}>
      <Pie data={data} dataKey="value" outerRadius={80}>
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default TaskChart;