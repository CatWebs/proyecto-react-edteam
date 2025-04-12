import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Bienvenido a CriptoWorld</h1>
      <p>Conoce el top 100 de criptomonedas en 2025</p>
      <Link to="/criptomonedas">Ir al Top 100</Link>
    </div>
  );
}

export default Home;
