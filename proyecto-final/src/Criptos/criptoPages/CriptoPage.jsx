import { useParams } from "react-router-dom";
import "./criptoPage.css";
import CriptoInfo from "./CriptoInfo";
import CriptoHistory from "./CriptoHistory";

function CriptoPage() {
  const params = useParams();
  console.log(params.id);
  const id = params.id;

  return (
    <>
      <h1> Soy la cripto {params.id}</h1>
      <CriptoInfo id={id} />
      <CriptoHistory id={id} />
    </>
  );
}

export default CriptoPage;
