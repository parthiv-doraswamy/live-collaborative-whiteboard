import { useEffect, useState } from "react";
import "./App.css";
import socket from "./socket";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <h1>Live Collaborative Whiteboard</h1>

      <p>
        Status: {isConnected ? "Connected" : "Disconnected"}
      </p>
    </div>
  );
}

export default App;