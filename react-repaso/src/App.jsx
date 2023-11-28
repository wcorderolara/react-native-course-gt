import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import { ThemeProvider } from "./context/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <div>
        <h1>Aplicacion para cambiar el color de tema</h1>
        <MyComponent/>
      </div>
    </ThemeProvider>
  );
}

export default App;
