const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173","http://ec2-35-154-187-94.ap-south-1.compute.amazonaws.com"],  // Corrected the origin URL
        methods: ["GET", "POST"]
    }
});

const userSocketMap = {}; // {userId : socketId}

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    
    console.log(`A user (${userId}) connected with socket id ${socket.id}`);

    if (userId !== "undefined" && userId !== undefined) {
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    console.log(userSocketMap);

    socket.on("disconnect", () => {
        console.log(`A user (${userId}) disconnected with socket id ${socket.id}`);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });

    socket.on("login", (id) => {
        console.log("User connected with socket", id);
        // Handle associating the socket with the user here if needed
    });
});

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

module.exports = { app, io, server,getReceiverSocketId };

