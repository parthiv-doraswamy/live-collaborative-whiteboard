import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./socket/socketHandler.js";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5001;
const allowedOrigins = (process.env.CLIENT_URL || "").split(",").map((v) => v.trim()).filter(Boolean);

app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : true, methods: ["GET","POST"] }));
app.get("/", (_req, res) => res.json({ ok: true, service: "live-collaborative-whiteboard" }));
app.get("/health", (_req, res) => res.json({ status: "healthy" }));

const io = new Server(server, { cors: { origin: allowedOrigins.length ? allowedOrigins : "*", methods: ["GET","POST"] } });
registerSocketHandlers(io);
server.listen(port, "0.0.0.0", () => console.log(`Whiteboard server listening on port ${port}`));