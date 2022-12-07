import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import Manager from "./pages/Manager/Manager";
import RegisterCourse from "./pages/RegisterCourse/RegisterCourse";
import EditCourse from "./pages/EditCourse/EditCourse";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={!auth ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!auth ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/manager"
            element={auth ? <Manager /> : <Navigate to="/" />}
          />
          <Route
            path="/register-course"
            element={auth ? <RegisterCourse /> : <Navigate to="/" />}
          />
          <Route
            path="/edit-course"
            element={auth ? <EditCourse /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
