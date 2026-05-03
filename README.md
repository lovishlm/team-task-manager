# 🚀 Team Task Manager (Full-Stack)

A full-stack web application to manage team projects and tasks with role-based access control. Users can create projects, assign tasks, track progress, and visualize task status through a dashboard.

---

## 📌 Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Role-based access (Admin / Member)

### 👑 Admin Capabilities

* Create Projects
* Create & Assign Tasks
* View all tasks and projects
* Dashboard with analytics (charts + stats)

### 👤 User Capabilities

* View assigned tasks
* Update task status (In Progress / Done)
* Track deadlines and overdue tasks

### 📊 Dashboard

* Task statistics (Total / Completed / Pending / Overdue)
* Visual chart (task distribution)

---

## 🛠 Tech Stack

### Frontend

* React.js
* CSS (Custom UI)
* Axios
* Recharts (for charts)

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JWT Authentication

---

## 📂 Project Structure

```
team-task-manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/lovishlm/team-task-manager.git
cd team-task-manager
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🌐 Deployment

* Backend deployed on Railway
* Frontend deployed on Railway
* MongoDB Atlas used as database

---


## 🔗 Live URL

(Add your deployed project link here)

---

## 🧠 Key Highlights

* Full-stack MERN application
* Role-based access control
* REST API integration
* Real-time task updates
* Data visualization using charts
* Clean and responsive UI

---

## 👨‍💻 Author

Lovish


