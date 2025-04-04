import "./App.css";
import "./Main.css";
import "./About.css";
import "./Projects.css";
import "./Habilidades.css";
import React, { useState } from "react";
import CEP from "./assets/images/API-CEP.png";
import calculadora from "./assets/images/Calculadora.png";
import relogio from "./assets/images/Relogio-Digital.png";
import formulario from "./assets/images/Formulario-Cad.png";
import login from "./assets/images/Tela-Login.png";
import "./Contact.css";
import photo from "./assets/images/photo-white.png";
import image from "./assets/images/image.eu.png";
import logo from "./assets/images/tarciana-logo.png";
import { Typewriter } from "react-simple-typewriter";
import {
  CaretDoubleUp,
  CaretDoubleDown,
  Phone,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  Moon,
  Sun,
} from "@phosphor-icons/react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <>
      <div>
        <section id="section-main" className="section-main">
          <header className="header">
            <a href="#section-main">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <nav className="nav">
              <a className="btn-nav" href="#section-main">
                Início
              </a>
              <a className="btn-nav" href="#section-about">
                Sobre mim
              </a>
              <a className="btn-nav" href="#section-projects">
                Projetos
              </a>
              <a className="btn-nav" href="#section-habilidades">
                Habilidades
              </a>
              <a className="btn-nav" href="#section-contact">
                Contato
              </a>
              <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}{" "}
              </button>
            </nav>
          </header>
          <div className="container-main">
            <div className="description">
              <h6>Olá!</h6>
              <h1>
                Eu sou{" "}
                <span style={{ color: "blueviolet", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Tarciana Souza",
                      "Desenvolvedora",
                      "Web Designer",
                      "Tarciana Souza",
                    ]}
                    loop={1}
                    typeSpeed={120}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p>
                Desenvolvedora{" "}
                <span style={{ color: "blueviolet" }}>Full-stack</span> com foco
                em <span style={{ color: "blueviolet" }}>front-end</span>
              </p>
            </div>
            <div className="images">
              <img className="photo" src={photo} alt="photo" />
            </div>
          </div>
          <button className="animacao-icon">
            <div>
              <CaretDoubleDown size={32} />
            </div>
          </button>
        </section>

        <section id="section-about" className="section-about">
          <div className="container-about">
            <h3>Sobre</h3>
            <h2>Vou contar um pouco sobre mim e meus interesses...</h2>
            <br />
            <div className="descricao-about">
              <img className="image-eu" src={image} alt="image-eu" />
              <p>
                Sou estudante de desenvolvimento com foco em front-end e <br />
                apaixonada por programação. Sempre busco criar impacto visual
                <br />
                através de interfaces e interações digitais. Tenho experiência
                <br />
                em JavaScript, ReactJS, Tailwind e Python. No meu tempo
                <br />
                livre gosto de explorar novas linguagens e acompanhar as
                <br />
                tendências da área para me manter sempre atualizada. Sou
                <br />
                dinâmica, proativa e tenho uma mentalidade voltada ao
                <br />
                aprendizado constante e ao meu crescimento pessoal e<br />
                profissional.
              </p>
            </div>
          </div>
          <button className="animacao-icon">
            <div>
              <CaretDoubleDown size={32} />
            </div>
          </button>
        </section>

        <section id="section-habilidades" className="section-habilidades">
          <h3>Resumo</h3>
          <h2>Minhas Habilidades</h2>
          <br />
          <div className="container">
            <div className="linguagens">
              <h1 style={{ fontSize: "32px" }}>Linguagens</h1>
              <br />
              <div className="linguagem">
                <p>Python → </p>
                <div className="pontos">
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto"></div>
                  <div className="ponto"></div>
                </div>
              </div>
              <div className="linguagem">
                <p>JavaScript → </p>
                <div className="pontos">
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto"></div>
                  <div className="ponto"></div>
                </div>
              </div>
              <div className="linguagem">
                <p>C → </p>
                <div className="pontos">
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto"></div>
                  <div className="ponto"></div>
                  <div className="ponto"></div>
                </div>
              </div>
              <div className="linguagem">
                <p>HTML & CSS → </p>
                <div className="pontos">
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto"></div>
                </div>
              </div>
              <div className="linguagem">
                <p>React.Js → </p>
                <div className="pontos">
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto forte"></div>
                  <div className="ponto"></div>
                  <div className="ponto"></div>
                </div>
              </div>
            </div>
            <div className="habilidades">
              <h1>Soft skills</h1>
              <br />
              <ul>
                <li style={{ fontSize: "25px" }}>→ Atenta aos detalhes</li>
                <li style={{ fontSize: "25px" }}>→ Boa comunicação</li>
                <li style={{ fontSize: "25px" }}>→ Criatividade</li>
                <li style={{ fontSize: "25px" }}>→ Responsabilidade</li>
                <li style={{ fontSize: "25px" }}>→ Proatividade</li>
              </ul>
            </div>
          </div>
          <button className="animacao-icon">
            <div>
              <CaretDoubleDown size={32} />
            </div>
          </button>
        </section>

        <section id="section-projects" className="section-projects">
          <h3>Portfolio</h3>
          <br />
          <div className="container-projects">
            <div className="box">
              <div className="box-projec">
                <img
                  className="img-projec"
                  src={relogio}
                  alt="Relógio Digital"
                />
                <h6>RELÓGIO DIGITAL</h6>
                <p>
                  Relógio Digital interativo com data e fusos horários do Brasil
                </p>
              </div>
              <div className="box-projec">
                <img
                  className="img-projec"
                  src={calculadora}
                  alt="Calculadora"
                />
                <h6>CALCULADORA</h6>
                <p>Calculadora simples com interface funcional para cálculos</p>
              </div>
              <div className="box-projec">
                <img
                  className="img-projec"
                  src={formulario}
                  alt="Formulário de Cadastro"
                />
                <h6>FORMULÁRIO DE CADASTRO</h6>
                <p>Formulário de Cadastro inspirado no Kabum</p>
              </div>
            </div>
            <div className="separacao">
              <div className="box-projec">
                <img className="img-projec" src={login} alt="Tela de Login" />
                <h6>TELA DE LOGIN</h6>
                <p>Tela de Login com design responsivo e limpo</p>
              </div>
              <div className="box-projec">
                <img className="img-projec" src={CEP} alt="API CEP" />
                <h6>API CEP</h6>
                <p>Tela de API CEP</p>
              </div>
            </div>
          </div>
          <button className="animacao-icon">
            <div>
              <CaretDoubleDown size={32} />
            </div>
          </button>
        </section>

        <section id="section-contact" className="section-contact">
          <h1>CONTATO</h1>
          <div className="textos-contato">
            <h3>Gostou do meu trabalho?</h3>
            <p>Entre em contato ou me acompanhe pelas redes sociais.</p>
          </div>
          <div className="opcoes-contato">
            <div className="container-contato">
              <div className="telefone">
                <a
                  href="https://alvo.chat/5Jsn"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Enviar mensagem no WhatsApp"
                >
                  <Phone size={40} weight="fill" />
                </a>
              </div>
              <p className="contato">
                Chamada ou WhatsApp <br />
                (+55) 32 99842-2562
              </p>
            </div>

            <div className="container-contato">
              <div className="email">
                <a
                  href="mailto:tarciana13pereira@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Enviar um e-mail"
                >
                  <EnvelopeSimple size={40} weight="fill" />
                </a>
              </div>
              <p className="contato">
                Envie um e-mail <br />
                tarciana13pereira@gmail.com
              </p>
            </div>

            <div className="container-contato">
              <div className="instagram">
                <a
                  href="https://www.instagram.com/tarcpierry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Abrir perfil do Instagram"
                >
                  <InstagramLogo size={40} weight="fill" />
                </a>
              </div>
              <p className="contato">
                Envie um direct <br />
                @tarc_pierry
              </p>
            </div>

            <div className="container-contato">
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/tarciana-spereira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Abrir perfil do linkedin"
                >
                  <LinkedinLogo size={40} weight="fill" />
                </a>
              </div>
              <p className="contato">
                Conecte-se comigo no LinkedIn <br />
                tarciana-spereira
              </p>
            </div>
          </div>
          <button className="animacao-icon">
            <div>
              <CaretDoubleUp size={32} />
            </div>
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
