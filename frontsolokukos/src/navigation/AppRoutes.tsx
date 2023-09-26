import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Admin, User } from "../views";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default AppRoutes;
