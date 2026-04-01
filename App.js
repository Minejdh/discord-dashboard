import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./styles.css";

const socket = io("http://localhost:3000");

export default function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    socket.on("log", (msg) => {
      setLogs((l) => [...l, msg]);
    });
  }, []);

  return (
    <div className="app">
      <div className="sidebar">Bots</div>
      <div className="chat">
        <div className="header">Dashboard</div>
        <div className="messages">
          {logs.map((l, i) => (
            <div key={i} className="message">{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}