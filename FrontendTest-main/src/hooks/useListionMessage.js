import React, { useEffect, useState } from 'react';
import { useSocketContext } from '../context/SocketContext';

const useListionMessage = () => {
  const { socket } = useSocketContext();
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      setMessages(newMessage);
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket]);

  return { messages, setMessages };
};

export default useListionMessage;
