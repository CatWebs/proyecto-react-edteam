import usePetition from "../../hooks/usePetition";
import "./criptoPage.css";
import parseFloatNumber from "../../helpers/parseFloatNumber.js";

function CriptoHistory({ id }) {
  const history = usePetition(`assets/${id}/history?interval=d1&`);
  return (
    <div className="history-container">
      {
        // Cuando history tenga data va a renderizar el div
        history && (
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {history.map(({ date, priceUsd, time }) => (
                <tr key={time}>
                  <td className="label">{new Date(date).toDateString()}</td>
                  <td className="price">{parseFloatNumber(priceUsd, 3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default CriptoHistory;
