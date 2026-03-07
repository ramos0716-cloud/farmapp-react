import { useState } from "react";

import paracetamol from "../images/paracetamol.PNG";
import ibuprofeno from "../images/ibuprofeno.PNG";
import amoxicilina from "../images/amoxicilina.PNG";
import aspirina from "../images/aspirina.PNG";
import bronquisol from "../images/bronquisol.PNG";

function Medicamentos({ agregarCarrito }) {

  const [busqueda, setBusqueda] = useState("");

  const [medicamentos] = useState([
    {
      id: 1,
      nombre: "Paracetamol",
      precio: 5000,
      imagen: paracetamol
    },
    {
      id: 2,
      nombre: "Ibuprofeno",
      precio: 7000,
      imagen: ibuprofeno
    },
    {
      id: 3,
      nombre: "Amoxicilina",
      precio: 12000,
      imagen: amoxicilina
    },
    {
      id: 4,
      nombre: "Aspirina",
      precio: 4500,
      imagen: aspirina
    },
    {
      id: 5,
      nombre: "Bronquisol",
      precio: 9000,
      imagen: bronquisol
    }
  ]);

  const medicamentosFiltrados = medicamentos.filter((med) =>
    med.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor">

      <h2>Medicamentos disponibles</h2>

      <input
        type="text"
        placeholder="Buscar medicamento..."
        className="buscador"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="grid">

        {medicamentosFiltrados.map((med) => (
          <div className="card" key={med.id}>

            <img src={med.imagen} alt={med.nombre} />

            <h3>{med.nombre}</h3>

            <p className="precio">$ {med.precio}</p>

            <button onClick={() => agregarCarrito(med)}>
            Comprar
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Medicamentos;