import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/App.css';

// Create a root and render App inside <div id="root">
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
