import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
