const rooms = new Map();

function getRoom(roomId) {
  if (!rooms.has(roomId)) rooms.set(roomId, { strokes: new Map(), users: new Set() });
  return rooms.get(roomId);
}

function leaveRoom(socket) {
  const roomId = socket.data.roomId;
  if (!roomId) return;
  const room = rooms.get(roomId);
  if (!room) return;
  room.users.delete(socket.id);
  socket.leave(roomId);
  if (room.users.size) socket.to(roomId).emit("room:users", room.users.size);
  else rooms.delete(roomId);
  socket.data.roomId = null;
}

export function registerSocketHandlers(io) {
  io.on("connection", (socket) => {
    socket.on("room:join", ({ roomId }) => {
      const cleanRoomId = String(roomId || "").trim().slice(0, 80);
      if (!cleanRoomId) return;
      leaveRoom(socket);
      const room = getRoom(cleanRoomId);
      room.users.add(socket.id);
      socket.join(cleanRoomId);
      socket.data.roomId = cleanRoomId;
      socket.emit("room:joined", { roomId: cleanRoomId, strokes: [...room.strokes.values()], users: room.users.size });
      io.to(cleanRoomId).emit("room:users", room.users.size);
    });

    socket.on("stroke:add", (stroke) => {
      const roomId = socket.data.roomId;
      if (!roomId || !stroke?.id || !Array.isArray(stroke.points)) return;
      const room = rooms.get(roomId);
      if (!room) return;
      const safeStroke = {
        id: String(stroke.id),
        points: stroke.points.slice(0, 5000).map((p) => ({ x: Number(p.x), y: Number(p.y) })),
        color: typeof stroke.color === "string" ? stroke.color : "#111827",
        size: Math.min(50, Math.max(1, Number(stroke.size) || 4)),
        tool: stroke.tool === "eraser" ? "eraser" : "brush"
      };
      room.strokes.set(safeStroke.id, safeStroke);
      socket.to(roomId).emit("stroke:add", safeStroke);
    });

    socket.on("stroke:undo", () => {
      const roomId = socket.data.roomId;
      const room = roomId && rooms.get(roomId);
      if (!room || room.strokes.size === 0) return;
      room.strokes.delete([...room.strokes.keys()].at(-1));
      io.to(roomId).emit("stroke:history", [...room.strokes.values()]);
    });

    socket.on("board:clear", () => {
      const roomId = socket.data.roomId;
      const room = roomId && rooms.get(roomId);
      if (!room) return;
      room.strokes.clear();
      io.to(roomId).emit("stroke:history", []);
    });

    socket.on("disconnect", () => leaveRoom(socket));
  });
}