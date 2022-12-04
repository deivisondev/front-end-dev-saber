import "./Auth.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DevSaber from "../../assets/dev-saber.svg";
import BackGroundImage from "../../assets/images/background-image.jpg";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <div className="auth-container-form">
        <div className="auth-container-logo">
          <img src={DevSaber} />
          <h1>Dev Saber</h1>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input id="auth-submit" type="submit" value="Entrar" />
        </form>
        <Link to="/register">Não tenho uma conta</Link>
      </div>
      <div>
        <img
          className="auth-background"
          src={BackGroundImage}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Login;
