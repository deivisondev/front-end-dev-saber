import "./Auth.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DevSaber from "../../assets/dev-saber.svg";
import BackGroundImage from "../../assets/images/background-image.jpg";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    dispatch(register(user));
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
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
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
          <input id="auth-submit" type="submit" value="Cadastrar" />
        </form>
        <Link to="/login">Já estou cadastrado</Link>
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

export default Register;
