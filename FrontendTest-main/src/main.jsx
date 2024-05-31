import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import axios from "axios";
import DisplaySettingContextProvider from "./store/DisplaySettingStore.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <DisplaySettingContextProvider>
    <SocketContextProvider>
      <RouterProvider router={router} />
    </SocketContextProvider>
  </DisplaySettingContextProvider>
);
