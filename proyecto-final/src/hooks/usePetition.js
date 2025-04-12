import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function usePetition(endpoint) {
  const [data, setData] = useState();
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
      .get(`${API_URL}${endpoint}${API_KEY}`)
      .then((data) => {
        setData(data.data.data);
      })
      .catch((e) => {
        console.error(e);
        peticionFallida();
      });
  }, []);
  return data;
}

export default usePetition;
