import { useParams } from "react-router-dom";

function DetalleMedicamento() {

  const { id } = useParams();

  return (
    <div className="contenedor">

      <h2>Detalle del medicamento</h2>

      <p>ID del medicamento: {id}</p>

      <p>Aquí se mostrará la información completa del medicamento.</p>

    </div>
  );
}

export default DetalleMedicamento;