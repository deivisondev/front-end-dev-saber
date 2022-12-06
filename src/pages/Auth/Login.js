import "./Auth.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DevSaber from "../../assets/dev-saber.svg";
import BackGroundImage from "../../assets/images/background-image.jpg";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className="auth-container">
      <div className="auth-container-form">
        <div className="auth-container-logo">
          <img src={DevSaber} />
          <h1>Dev Saber</h1>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
          {!loading ? (
            <input id="auth-submit" type="submit" value="Entrar" />
          ) : (
            <input id="auth-submit" type="submit" value="Aguarde..." disabled />
          )}
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
