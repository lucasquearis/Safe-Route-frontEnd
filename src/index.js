import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Partner from "./pages/Partner";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Partner />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
