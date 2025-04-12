import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "./App";
import "./main.css";
import CriptoPage from "./Criptos/criptoPages/CriptoPage.jsx";
import ContenedorCriptos from "./Criptos/ContenedorCriptos.jsx";
import Home from "./Home";
import NoPage from "./NotFound/NoPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/criptomonedas" element={<App />}>
        <Route index element={<ContenedorCriptos />} />
        <Route path=":id" element={<CriptoPage />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);
