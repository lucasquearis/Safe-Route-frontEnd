import React from "react";
import Footer from "../../components/Footer";
import covidSafe from "../../img/covidSafe.png";

const Cadastro = () => {
  return (
    <div>
      <img alt="selo covid Safe" src={covidSafe} />
      <h1>Formulário para o cadastro</h1>
      <h3>Todos os campos são obrigatórios*:</h3>
      <form>
        <label>
          Nome*:
          <input></input>
        </label>
        <label>
          Sobre você*:
          <input></input>
        </label>
        <label>
          URL de uma foto*:
          <input></input>
        </label>
        <label>
          Email*:
          <input></input>
        </label>
        <label>
          Password*:
          <input></input>
        </label>
      </form>
      <Footer />
    </div>
  );
};

export default Cadastro;
