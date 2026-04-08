import { useState, useEffect } from "react";
import img1 from "../imagens/banner1.webp";
import img2 from "../imagens/banner2.jpeg";
import img3 from "../imagens/banner3.jpeg";

const imagens = [img1, img2, img3];

function Slideshow() {
  const [index, setIndex] = useState(0);

  // automático
  useEffect(() => {
    const interval = setInterval(() => {
      proximo();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const proximo = () => {
    setIndex((prev) => (prev + 1) % imagens.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <div id="inicio" className="hero-slider">
      {/* IMAGEM */}
      <img src={imagens[index]} className="slide-img" />

      {/* OVERLAY ESCURO */}
      <div className="overlay"></div>

      {/* TEXTO EM CIMA */}
      <div className="hero-content">
        <h1>
          O estilo do <span>No-Gi</span> até você
        </h1>
        <p>Equipamentos de alta performance para Jiu-Jitsu</p>
        
        <button onClick={() => document.getElementById("catalogo").scrollIntoView()}>
         Ver Produtos
        </button>
      </div>

      {/* SETAS */}
      <button className="arrow left" onClick={anterior}>
        ‹
      </button>

      <button className="arrow right" onClick={proximo}>
        ›
      </button>
    </div>
  );
}

export default Slideshow;