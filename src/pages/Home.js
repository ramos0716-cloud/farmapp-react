import { Link } from "react-router-dom";

function Home() {

  return (

    <div>

      {/* BANNER */}

      <div className="banner">

        <h1>Bienvenido a FarmApp</h1>

        <p>Tu farmacia online de confianza</p>

        <Link to="/medicamentos">
          <button className="btn-principal">
            Ver Medicamentos
          </button>
        </Link>

      </div>

      {/* MEDICAMENTOS DESTACADOS */}

      <div className="destacados">

        <h2>Medicamentos destacados</h2>

        <div className="grid">

          <div className="card">
            <h3>Paracetamol</h3>
            <p>Alivia dolor y fiebre</p>
          </div>

          <div className="card">
            <h3>Ibuprofeno</h3>
            <p>Antiinflamatorio</p>
          </div>

          <div className="card">
            <h3>Aspirina</h3>
            <p>Dolor de cabeza y fiebre</p>
          </div>

        </div>

      </div>

      {/* SERVICIOS */}

      <div className="servicios">

        <h2>Nuestros servicios</h2>

        <div className="grid-servicios">

          <div className="servicio">
            🚚
            <h3>Envíos rápidos</h3>
            <p>Entrega a domicilio</p>
          </div>

          <div className="servicio">
            💊
            <h3>Medicamentos certificados</h3>
            <p>Productos de calidad</p>
          </div>

          <div className="servicio">
            📞
            <h3>Atención 24/7</h3>
            <p>Soporte farmacéutico</p>
          </div>

        </div>

      </div>

    </div>

  );

}

export default Home;