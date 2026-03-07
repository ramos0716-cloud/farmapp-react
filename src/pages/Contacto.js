function Contacto(){

  return(

    <div className="contenedor-contacto">

      <h1>Contacto</h1>

      <p>Si tienes alguna duda o consulta puedes comunicarte con nosotros.</p>

      <div className="info-contacto">

        <p><strong>📍 Dirección:</strong> Armenia, Quindío, Colombia</p>

        <p><strong>📞 Teléfono:</strong> +57 314 552 62 53</p>

        <p><strong>📧 Correo:</strong> maicol.ramos.1533@miremington.edu.co</p>

      </div>

      <h3>Envíanos un mensaje</h3>

      <form className="formulario">

        <input
          type="text"
          placeholder="Nombre"
          required
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          required
        />

        <textarea
          placeholder="Escribe tu mensaje"
          rows="4"
          required
        ></textarea>

        <button type="submit">
          Enviar mensaje
        </button>

      </form>

    </div>

  )

}

export default Contacto