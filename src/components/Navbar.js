import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import DevSaberLogo from "../assets/dev-saber.svg";
import ProfileIcon from "../assets/icons/profile-icon.svg";

const Navbar = () => {
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
      <button id="nav-button-profile">
        <img id="nav-icon" src={ProfileIcon} />
      </button>
    </nav>
  );
};

export default Navbar;
