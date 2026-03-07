import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar({ carrito }) {

  return (

    <nav className="navbar">

      <div className="logo">

        <img src={logo} alt="FarmApp" />

        <h1>FarmApp</h1>

      </div>

      <div className="menu">

        <Link to="/">Inicio</Link>
        <Link to="/medicamentos">Medicamentos</Link>
        <Link to="/contacto">Contacto</Link>

      </div>

      <div className="carrito">

        <Link to="/carrito">
          🛒 Carrito ({carrito})
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;