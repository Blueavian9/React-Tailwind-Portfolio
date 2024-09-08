import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css"; // Assuming this is where your Tailwind CSS is set up

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.body.innerHTML = '<div id="app"></div>';

// // Render React
