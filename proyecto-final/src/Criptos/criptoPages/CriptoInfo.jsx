import parseFloatNumber from "../../helpers/parseFloatNumber";
import usePetition from "../../hooks/usePetition";
import "./criptoPage.css";

function CriptoInfo({ id }) {
  const cripto = usePetition(`assets/${id}?`);
  return (
    <div className="cripto container">
      {
        // Cuando cripto tenga data va a renderizar el div
        cripto && (
          <div className="info">
            <ul>
              <li>
                <span className="label">Rank: </span>
                {cripto.rank}
              </li>
              <li>
                <span className="label">Symbol: </span>
                {cripto.symbol}
              </li>
              <li>
                <span className="label">Volume USD 24 Hr: </span>
                {parseFloatNumber(cripto.volumeUsd24Hr, 4)}
              </li>
              <li>
                <span className="label">Change Percent 24 Hr: </span>
                {parseFloatNumber(cripto.changePercent24Hr, 4)}
              </li>
              <li>
                <span className="label">Price USD: </span>
                {parseFloatNumber(cripto.priceUsd, 4)}
              </li>
            </ul>
          </div>
        )
      }
    </div>
  );
}

export default CriptoInfo;
