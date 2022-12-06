import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import DevSaberLogo from "../assets/dev-saber.svg";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../slices/authSlice";

const Navbar = () => {
  const [options, setOptions] = useState(false);

  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  return (
    <nav id="nav">
      <Link to="/">
        <img id="nav-icon" src={DevSaberLogo} />
      </Link>
      <ul id="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/my-courses">Meus cursos</NavLink>
        </li>
        <li>
          <NavLink to="/scheduled-courses">Cursos marcados</NavLink>
        </li>
      </ul>
      <button
        id="nav-button-profile"
        onClick={() => {
          setOptions(!options);
        }}
      >
        <img id="nav-icon" src={ProfileIcon} />
      </button>
      {options &&
        (auth ? (
          <div className="nav-options">
            <NavLink to="/manager">Gerenciar</NavLink>
            <button onClick={handleLogout}>Sair</button>
          </div>
        ) : (
          <div className="nav-options">
            <NavLink to="/login">Entrar</NavLink>
            <NavLink to="/register">Cadastre-se</NavLink>
          </div>
        ))}
    </nav>
  );
};

export default Navbar;
