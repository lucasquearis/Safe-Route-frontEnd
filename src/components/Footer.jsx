import React from "react";
import "../footer.css";
const Footer = () => {
  return (
    <footer className="card-group">
      <section className="card cartao text-white mb-">
        <div className="card-body">
          <h4 className="card-title">Sobre</h4>
          <p className="card-text">
            Aplicação desenvolvida no Hackathon Trybe de 11/12/2021 a
            13/12/2021.
            <br />
            <br />O desafio: O setor de turismo se encontra 44% abaixo do
            patamar de fevereiro de 2020. Pensando nas cidades que foram
            impactadas por esse cenário: Como aumentar a visibilidade do turismo
            local através da tecnologia, no mundo pós-pandemia?
          </p>
        </div>
      </section>

      <section className="card cartao text-white mb-2">
        <div className="card-body">
          <h5 className="card-title">Quem Somos</h5>
          <p className="card-text">
            Grupo formado por estudantes da Trybe das turmas 11 e 12.
          </p>
          <div className="container members">
            <div className="row member">
              <div className="col-sm member-name">
                <p>João Lima</p>
              </div>
              <div className="col-sm member-midia">
                <a href="https://www.linkedin.com/in/joao-paulo-gomes-lima-008/">
                  <img
                    className="linkedin-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  />
                </a>
                <a href="https://github.com/Lima08">
                  <img
                    className="github-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  />
                </a>
              </div>
            </div>
            <div className="row member">
              <div className="col-sm member-name">
                <p>Samuel Constantino</p>
              </div>
              <div className="col-sm member-midia">
                <a href="https://www.linkedin.com/in/samuel-constantino/">
                  <img
                    className="linkedin-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  />
                </a>
                <a href="https://github.com/samuel-constantino">
                  <img
                    className="github-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  />
                </a>
              </div>
            </div>
            <div className="row member">
              <div className="col-sm member-name">
                <p>Lucas Santos</p>
              </div>
              <div className="col-sm  member-midia">
                <a href="https://www.linkedin.com/in/lucasquearis">
                  <img
                    className="linkedin-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  />
                </a>
                <a href="https://github.com/lucasquearis">
                  <img
                    className="github-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  />
                </a>
              </div>
            </div>
            <div className="row member">
              <div className="col-sm member-name">
                <p>Cesar Bhering</p>
              </div>
              <div className="col-sm  member-midia">
                <a href="https://www.linkedin.com/in/cesar-cancado-bhering/">
                  <img
                    className="linkedin-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  />
                </a>
                <a href="https://github.com/cesarbhering">
                  <img
                    className="github-logo"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card cartao text-white mb-2">
        <div className="card-body">
          <h5 className="card-title">Tecnologias Utilizadas</h5>
          <div className="cointainer icons-grid ">
            <div className="row tech-row">
              <div className="col-2 ml-auto">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              </div>
              <div className="col-2 ml-auto">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              </div>
              <div className="col-2 ml-auto">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              </div>
            </div>
            <div className="row tech-row">
              <div className="col-2 ml-auto">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              </div>
              <div className="col-2 ml-auto">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              </div>
              <div className="col-2 ml-auto">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              </div>
            </div>
            <div className="row tech-row">
              <div className="col-3 ml-auto">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
              </div>
              <div className="col-3 ml-auto">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
