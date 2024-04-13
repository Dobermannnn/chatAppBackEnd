const express = require("express");
const Socket = require("socket.io");
const PORT = 3000;

const app = express();
const server = require("http").createServer(app);

const io = Socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("connect", (user) => {});
  socket.on("message", (user, text) => {
    io.emit("message", user, text);
  });
  socket.on("disconnect", () => {});
});

server.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
