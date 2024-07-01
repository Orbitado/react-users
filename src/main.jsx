import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import UserDetail from "./components/UserDetail/UserDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
