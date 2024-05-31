import React, { useEffect, useState } from 'react';
import { useSocketContext } from '../context/SocketContext';

const useListionMessage = () => {
  const { socket } = useSocketContext();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      console.log("message ", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket]);

  return { messages, setMessages };
};

export default useListionMessage;
