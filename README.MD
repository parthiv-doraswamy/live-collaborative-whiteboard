# Live Collaborative Whiteboard

A real-time collaborative whiteboard built with **React, Node.js, Express, Socket.IO, and HTML5 Canvas**. The project is developed incrementally in phases, with the current implementation covering the complete **Phase 1–3 real-time collaboration milestone** and a production deployment on Render.

---

## 🚀 Live Demo

- **Frontend:** https://live-whiteboard-v2.onrender.com
- **Backend:** https://live-whiteboard-server-4fyo.onrender.com
- **Backend health check:** https://live-whiteboard-server-4fyo.onrender.com/health

> The frontend connects to the deployed Socket.IO backend using the `VITE_SERVER_URL` environment variable.

---

## ✨ Current Features

### ✅ Phase 1 – Project & Real-Time Setup

- React + Vite frontend
- Node.js + Express backend
- Socket.IO client/server integration
- Real-time connection status
- Modular client/server structure
- Environment-variable based server configuration

### ✅ Phase 2 – Local Whiteboard Engine

- HTML5 Canvas drawing
- Freehand brush tool
- Eraser tool
- Adjustable brush/eraser size
- Color selection
- Clear board
- Undo
- Responsive whiteboard interface

### ✅ Phase 3 – Real-Time Collaboration

- Room-based whiteboards
- Multiple users can join the same room
- Real-time stroke synchronization with Socket.IO
- New users receive the current room stroke history
- Live connected-user count
- Room switching
- Server-side in-memory stroke history
- Collaborative undo
- Collaborative clear board
- Automatic room cleanup when the last user leaves

---

## 🖥️ How It Works

The application follows a client-server real-time architecture:

1. A user opens the React frontend.
2. The client establishes a Socket.IO connection with the Node.js server.
3. The user joins a room using a room ID.
4. Drawing actions are converted into stroke data.
5. Stroke data is emitted through Socket.IO.
6. The server stores the current room history in memory and broadcasts new strokes to other users in that room.
7. When another user joins the room, the server sends the existing stroke history so the board can be reconstructed.
8. Undo and clear operations update the shared room history and broadcast the new state.

### Architecture

```text
                    ┌─────────────────────────┐
                    │      React + Vite       │
                    │       Whiteboard        │
                    └────────────┬────────────┘
                                 │
                           Socket.IO
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    Node.js + Express    │
                    │       Socket.IO         │
                    └────────────┬────────────┘
                                 │
                       In-memory room state
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │ Rooms → Users → Strokes │
                    └─────────────────────────┘
```

> **Current limitation:** room and stroke history is stored in server memory. Restarting the backend clears active whiteboards. Persistent storage/database support is planned for a later phase.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5 Canvas
- CSS
- Socket.IO Client

### Backend

- Node.js
- Express
- Socket.IO
- HTTP server

### Development & Deployment

- Git
- GitHub
- Render
- npm

---

## 📂 Project Structure

```text
live-collaborative-whiteboard/
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── socket.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── socket/
│   │   │   └── socketHandler.js
│   │   └── server.js
│   ├── package.json
│   └── .gitignore
│
├── package.json
└── README.MD
```

---

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/parthiv-doraswamy/live-collaborative-whiteboard.git
cd live-collaborative-whiteboard
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Install frontend dependencies

Open another terminal:

```bash
cd client
npm install
```

### 4. Configure the frontend

Create `client/.env`:

```env
VITE_SERVER_URL=http://localhost:5001
```

### 5. Start the backend

From the `server` directory:

```bash
npm start
```

The backend runs on:

```text
http://localhost:5001
```

### 6. Start the frontend

From the `client` directory:

```bash
npm run dev
```

The Vite development server normally runs on:

```text
http://localhost:5173
```

---

## 🌐 Production Deployment

The project is deployed on **Render** as two services:

| Service | Purpose | URL |
|---|---|---|
| `live-whiteboard-v2` | React/Vite frontend | https://live-whiteboard-v2.onrender.com |
| Whiteboard server | Node.js + Express + Socket.IO backend | https://live-whiteboard-server-4fyo.onrender.com |

### Frontend environment variable

```env
VITE_SERVER_URL=https://live-whiteboard-server-4fyo.onrender.com
```

### Backend environment variable

```env
CLIENT_URL=https://live-whiteboard-v2.onrender.com,https://live-whiteboard-client.onrender.com
```

The backend listens on Render's `PORT` environment variable and binds to `0.0.0.0` for production hosting.

---

## 🧪 Testing the Collaboration

To test the real-time functionality:

1. Open the live frontend in two browser tabs/windows.
2. Enter the same room ID in both.
3. Join the room.
4. Draw on the canvas in one window.
5. The stroke should appear in the other window in real time.
6. Test brush size, color, eraser, undo, and clear.
7. Open the backend health endpoint to verify that the server is running.

For a stronger multi-user test, use two different browsers or an incognito window.

---

## 📅 Development Roadmap

| Phase | Status | Description |
|---|---|---|
| Phase 1 | ✅ Complete | Project setup and Socket.IO connection |
| Phase 2 | ✅ Complete | Local Canvas drawing engine |
| Phase 3 | ✅ Complete | Real-time room-based collaboration |
| Phase 4 | ⏳ Planned | Persistent storage/database |
| Phase 5 | ⏳ Planned | Advanced whiteboard tools |
| Phase 6 | ⏳ Planned | Enhanced UX, live cursors and user identity |
| Phase 7 | ✅ Initial deployment | Production deployment on Render |

---

## 🔮 Future Improvements

- Persistent whiteboards using PostgreSQL/MongoDB
- User authentication
- Named users and avatars
- Live cursor tracking
- More drawing shapes and tools
- Text tool
- Image upload
- Export/download as PNG
- Board sharing links
- Private/public rooms
- Improved conflict handling
- Undo/redo per user
- Dark/light themes
- Better mobile and tablet support
- Automated tests and CI/CD

---

## 🤝 Contributing

This project is currently under active development. Suggestions, issues, and improvements are welcome.

---

## 📄 License

This project is licensed under the MIT License.
