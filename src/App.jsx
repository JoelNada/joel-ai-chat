import "./App.css";
import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
