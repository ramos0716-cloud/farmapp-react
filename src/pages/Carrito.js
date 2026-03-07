
import { Link } from "react-router-dom";

function Carrito({ carrito, eliminarProducto }) {

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  return (

    <div className="contenedor">

      <h2>Carrito de compras</h2>

      {carrito.length === 0 ? (

        <p>No hay productos en el carrito</p>

      ) : (

        <div>

          <div className="grid">

            {carrito.map((prod, index) => (

              <div className="card" key={index}>

                <img src={prod.imagen} alt={prod.nombre} />

                <h3>{prod.nombre}</h3>

                <p className="precio">$ {prod.precio}</p>

                <button
                  className="eliminar"
                  onClick={() => eliminarProducto(index)}
                >
                  Eliminar
                </button>

              </div>

            ))}

          </div>

          <h3>Total: $ {total}</h3>

          <Link to="/pago">
            <button className="pagar">
            Ir a pagar
            </button>
            </Link>

          </div>

      )}

    </div>

  );
}

export default Carrito;