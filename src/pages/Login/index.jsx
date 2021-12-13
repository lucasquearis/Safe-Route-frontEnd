import React, { useState } from "react";
import Footer from "../../components/Footer";
import covidSafe from "../../img/covidSafe.png";
import { loginUser } from "../../services";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Eu sou o Login</h1>
      <img alt="selo covid Safe" src={covidSafe} />
      <form>
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
      <Footer />
    </div>
  );
};

export default Login;
