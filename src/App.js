import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import Medicamentos from "./pages/Medicamentos";
import Contacto from "./pages/Contacto";
import DetalleMedicamento from "./pages/DetalleMedicamento";
import Carrito from "./pages/Carrito";
import Pago from "./pages/Pago";
import Footer from "./components/Footer";

function App() {

  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // AGREGAR PRODUCTO AL CARRITO
  const agregarCarrito = (producto) => {

    setCarrito([...carrito, producto]);

    setMensaje(producto.nombre + " agregado al carrito");

    setTimeout(() => {
      setMensaje("");
    }, 2000);
  };

  // ELIMINAR PRODUCTO DEL CARRITO
  const eliminarProducto = (index) => {

    const nuevoCarrito = carrito.filter((_, i) => i !== index);

    setCarrito(nuevoCarrito);

  };

  return (

    <Router>

      <Navbar carrito={carrito.length} />

      <Routes>

<Route path="/" element={<Home />} />

  <Route
    path="/medicamentos"
    element={<Medicamentos agregarCarrito={agregarCarrito} />}
/>

  <Route path="/contacto" element={<Contacto />} />

  <Route path="/medicamento/:id" element={<DetalleMedicamento />} />

  <Route
    path="/carrito"
    element={
    <Carrito
    carrito={carrito}
    eliminarProducto={eliminarProducto}
/>
}
/>

<Route path="/pago" element={<Pago />} />

</Routes>

    <Toast mensaje={mensaje} />

     <Footer />

    </Router>

  );
}

export default App;