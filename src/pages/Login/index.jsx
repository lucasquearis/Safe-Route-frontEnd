import React, { useState } from "react";
import covidSafe from "../../img/covidSafe.png";
import { loginUser } from "../../services";
import { Link, useNavigate } from "react-router-dom";
import "../../style/login.css";

const Login = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const navigate = useNavigate();

  const authToken = async (e) => {
    e.preventDefault();
    const { token } = await loginUser({
      email: emailState,
      password: passwordState,
    });
    localStorage.setItem("token-safe-route", JSON.stringify(token));
    if (!token) alert("Login não autorizado");
    return navigate("/");
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "email":
        setEmailState(value);
        break;
      case "password":
        setPasswordState(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="d-flex justify-content-center  align-items-center login">
      <div className="flex-column">
        <div className="login-img-container">
          <img className="img-signin" alt="selo covid Safe" src={covidSafe} />
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="email" className="login-text">
              Endereço de email
            </label>
            <input
              className="form-control"
              onChange={handleChange}
              value={emailState}
              id="email"
              type="email"
              name="email"
              placeholder="Seu email"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="login-text">
              {" "}
              Senha:
            </label>
            <input
              className="form-control"
              onChange={handleChange}
              value={passwordState}
              name="password"
              type="password"
              id="password"
              placeholder="Senha"
            ></input>
          </div>

          <button className="btn btn-outline-success" onClick={authToken}>
            Entrar
          </button>
        </form>

        <div className="login-text">
          Ainda não possui cadastro? Crie sua conta{" "}
          <Link to="/cadastro">aqui!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
