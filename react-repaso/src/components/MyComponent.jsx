import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const MyComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#333" : "#f0f0f0",
      }}
    >
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
};

export default MyComponent;
