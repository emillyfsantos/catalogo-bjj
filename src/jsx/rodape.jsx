import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

function Rodape() {
  return (
    <>
      <div id="contato" className="contato">
        <h2>Fale conosco</h2>
        <p>Entre em contato ou acompanhe nossas redes</p>

        <div className="contato-grid">
          <div className="contato-card">
            <FaWhatsapp className="icon whatsapp" />
            <h3>WhatsApp</h3>
            <p>(75) 99999-9999</p>
            <button
            onClick={() =>window.open("https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20nos%20produtos","_blank")}>
            Conversar
            </button>
          </div>

          <div className="contato-card">
            <FaInstagram className="icon instagram" />
            <h3>Instagram</h3>
            <p>@beitstore</p>
            <button
            onClick={() => window.open("https://instagram.com/beitstore", "_blank")}>
            Seguir
            </button>
          </div>

          <div className="contato-card">
            <FaEnvelope className="icon email" />
            <h3>Email</h3>
            <p>contato@beitstore.com</p>
            <button
            onClick={() => window.location.href = "mailto:contato@beitstore.com"}>
            Enviar
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Emilly Figueiredo © 2026 Beit Store</p>
      </div>
    </>
  );
}

export default Rodape;