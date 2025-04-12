import Cripto from "./Cripto";
import "./ContenedorCriptos.css";
import usePetition from "../hooks/usePetition";

const ContenedorCriptos = () => {
  const criptos = usePetition("assets?");
  if (!criptos) return <h1>cargando...</h1>;
  return (
    <div className="criptomonedas-container">
      <h1>Criptomonedas</h1>
      <div className="section-criptos">
        <div className="container-criptos">
          {criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
            <Cripto
              key={id}
              name={name}
              priceUsd={priceUsd}
              symbol={symbol}
              changePercent24Hr={changePercent24Hr}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContenedorCriptos;
