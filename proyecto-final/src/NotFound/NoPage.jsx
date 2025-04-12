import { Link } from "react-router-dom";
function NoPage() {
  return (
    <div>
      <h1>Ups.. La página solicitada no existe</h1>
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default NoPage;
