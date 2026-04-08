import { useState, useEffect, useRef } from "react";

function Topo() {
  const [ativo, setAtivo] = useState("inicio");
  const indicadorRef = useRef(null);
  const navRef = useRef(null);

  // SCROLL ATIVO
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "catalogo", "contato"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          const height = el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setAtivo(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MOVER LINHA
  useEffect(() => {
    const ativoEl = navRef.current.querySelector(".active");

    if (ativoEl && indicadorRef.current) {
      indicadorRef.current.style.width = `${ativoEl.offsetWidth}px`;
      indicadorRef.current.style.left = `${ativoEl.offsetLeft}px`;
    }
  }, [ativo]);

  return (
    <div className="navbar">
      <h2>BEIT STORE</h2>

      <div className="nav-links" ref={navRef}>
        <a href="#inicio" className={ativo === "inicio" ? "active" : ""}>
          Início
        </a>

        <a href="#catalogo" className={ativo === "catalogo" ? "active" : ""}>
          Produtos
        </a>

        <a href="#contato" className={ativo === "contato" ? "active" : ""}>
          Contato
        </a>

        <span className="indicador" ref={indicadorRef}></span>
      </div>

      <button
  onClick={() =>window.open("https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20nos%20produtos","_blank")}>
  Comprar
</button>
    </div>
  );
}

export default Topo;