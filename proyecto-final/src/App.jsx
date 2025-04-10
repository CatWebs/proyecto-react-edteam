import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const peticionFallida = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  };

  useEffect(() => {
    axios
      .get(`${API_URL}assets${API_KEY}`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error;
        peticionFallida();
      });
  }, []);
  const [criptos, setCriptos] = useState();
  if (!criptos) return <h1>cargando...</h1>;

  return (
    <>
      <h1>Criptomonedas</h1>
      <ol>
        {criptos.map(({ id, name, priceUsd }) => (
          <li key={id}>
            {name} = {priceUsd}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
