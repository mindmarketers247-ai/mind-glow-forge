import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const storedTheme = localStorage.getItem("mm-theme") === "light" ? "light" : "dark";
document.documentElement.classList.add(storedTheme);
document.documentElement.style.colorScheme = storedTheme;

createRoot(document.getElementById("root")!).render(<App />);
