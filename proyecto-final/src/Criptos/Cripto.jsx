import "./Cripto.css";
import { Link } from "react-router-dom";
function Cripto({ id, name, priceUsd, symbol, changePercent24Hr }) {
  return (
    <div className="card-cripto">
      <h3>{name}</h3>
      <div className="info">
        <p>
          <span className="label">Precio: </span>
          {parseFloat(priceUsd).toFixed(4)}
        </p>
        <p>
          <span className="label">Código: </span>
          {symbol}
        </p>
        <p>
          <span className="label">Variación 24Hr: </span>
          {parseFloat(changePercent24Hr).toFixed(4)}%
        </p>
        <Link to={`${id}`}>Ver detalles</Link>
      </div>
    </div>
  );
}

export default Cripto;
