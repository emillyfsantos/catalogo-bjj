import { motion } from "framer-motion";
import produtos from "../dados/produtos";

function Perfil() {
  const categorias = ["rashguards", "shorts", "faixas", "legging / acessórios"];

  return (
    <div id="catalogo" className="container">

      {categorias.map((cat) => (
        <div key={cat}>
          <h2 className="titulo">{cat.toUpperCase()}</h2>

          <motion.div
            className="grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {produtos
              .filter((item) => item.categoria === cat)
              .map((item) => (
                <div className="card" key={item.id}>
                  <img src={item.imagem} />
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                  <p className="preco">R$ {item.preco}</p>
                </div>
              ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Perfil;