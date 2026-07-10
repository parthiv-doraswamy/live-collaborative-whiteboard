# Live Collaborative Whiteboard

A real-time collaborative whiteboard application built using **React**, **Node.js**, **Express**, and **Socket.IO**. This project is being developed in phases, following real-world software engineering practices with modular architecture, incremental development, and Git-based version control.

---

## 🚀 Project Overview

The goal of this project is to build a feature-rich collaborative whiteboard where multiple users can draw together in real time.

Development is divided into phases so that each milestone is fully functional, testable, and easy to maintain.

---

## ✨ Features (Current Progress)

### ✅ Phase 1 – Project Setup (Completed)

* Express backend setup
* Socket.IO server integration
* React + Vite frontend setup
* Socket.IO client integration
* Frontend and backend real-time connection
* Connection status indicator
* Modular project structure
* Environment variable configuration

---

## 📌 Upcoming Features

* Interactive HTML5 Canvas
* Smooth freehand drawing
* Multi-user real-time collaboration
* Room-based whiteboards
* Stroke synchronization
* Eraser tool
* Undo functionality
* Clear board
* Download canvas as PNG
* Live cursors
* User names
* Responsive UI
* Dark/Light theme
* Production deployment

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* HTML5 Canvas (Upcoming)
* CSS

### Backend

* Node.js
* Express
* Socket.IO

### Tools

* Git
* GitHub

---

## 📂 Project Structure

```text
live-collaborative-whiteboard/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── socket.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── server/
    ├── src/
    │   ├── config/
    │   ├── socket/
    │   │   └── socketHandler.js
    │   └── server.js
    │
    ├── package.json
    └── .gitignore
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd live-collaborative-whiteboard
```

---

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the `client` directory.

```env
VITE_SERVER_URL=http://localhost:5001
```

---

### 5. Start the Backend

```bash
cd server
npm run dev
```

---

### 6. Start the Frontend

```bash
cd client
npm run dev
```

---

## 🌐 Default Development Ports

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:5001 |

---

## 📅 Development Roadmap

* ✅ Phase 1 – Project Setup
* ⏳ Phase 2 – Local Drawing Engine
* ⏳ Phase 3 – Real-Time Collaboration
* ⏳ Phase 4 – Rooms & Synchronization
* ⏳ Phase 5 – Whiteboard Tools
* ⏳ Phase 6 – User Experience
* ⏳ Phase 7 – Production & Deployment

---

## 🤝 Contributing

This project is currently under active development. Contributions, suggestions, and feedback are welcome once the initial version is complete.

---

## 📄 License

This project is licensed under the MIT License.
