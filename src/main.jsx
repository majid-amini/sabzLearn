import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import "./Styles/reset.css";
import "./Styles/fonts.css";
import "./Styles/variables.css";
import "./Styles/defaults.css";
import "./Styles/helpers.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
);
