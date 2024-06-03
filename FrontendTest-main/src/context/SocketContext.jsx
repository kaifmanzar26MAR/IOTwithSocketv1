import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);

  useEffect(() => {
    const initializeSocket = () => {
      const newSocket = io("http://ec2-35-154-187-94.ap-south-1.compute.amazonaws.com:5000", {
        query: {
          userId: 0,
        },
      });

      newSocket.on('connect', () => {
        console.log('Connected to server');
    });

      newSocket.on("getOnlineUsers", (users) => {
        if (users) {
          console.log(users);
          setOnlineUsers(users);
        }
      });

      setSocket(newSocket);
    };

    initializeSocket();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
