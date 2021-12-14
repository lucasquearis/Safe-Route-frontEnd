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
        <form >
          <label htmlFor="email">
            Email:
            <input
              onChange={handleChange}
              value={emailState}
              type="email"
              name="email"
            ></input>
          </label>
          <label htmlFor="password">
            Senha:
            <input
              onChange={handleChange}
              value={passwordState}
              name="password"
              type="password"
            ></input>
          </label>
          <button onClick={authToken}>Entrar</button>
        </form>
        <div>
          <h2>Ainda não possui cadastro?</h2>
          <h4>
            Crie sua conta <Link to="/cadastro">aqui</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
