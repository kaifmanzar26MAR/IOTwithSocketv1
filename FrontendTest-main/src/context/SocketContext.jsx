import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const initializeSocket = () => {
      const newSocket = io("http://localhost:5000", {
        query: {
          userId: 0,
        },
      });

      newSocket.on('connect', () => {
        console.log('Connected to server');
    });

    newSocket.on('newMessage',(message)=>{
      console.log(message)
    })

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
