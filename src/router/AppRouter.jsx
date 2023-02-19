import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Init from "@/pages/Init";
import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Init />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default AppRouter;
