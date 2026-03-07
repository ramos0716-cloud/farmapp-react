FarmApp: Aplicación Web de Farmacia Desarrollada con React
Maicol Ramos
Universidad [Nombre de tu universidad]
Ingeniería en Sistemas
Lenguaje de Programación II
Profesor: [Nombre del profesor]
Fecha de entrega: [día mes año]
________________________________________
Introducción
En la actualidad, las aplicaciones web se han convertido en herramientas fundamentales para ofrecer servicios digitales de forma eficiente y accesible. El desarrollo de interfaces modernas permite a los usuarios interactuar con sistemas de manera rápida, intuitiva y desde diferentes dispositivos.
En este contexto, el presente proyecto tiene como objetivo desarrollar una aplicación web denominada FarmApp, la cual simula el funcionamiento básico de una farmacia en línea. La aplicación fue construida utilizando React, una biblioteca de JavaScript ampliamente utilizada para la creación de interfaces de usuario interactivas.
A través de esta aplicación, los usuarios pueden visualizar un catálogo de medicamentos, buscar productos específicos, agregarlos a un carrito de compras, eliminar artículos y simular el proceso de pago. El desarrollo del proyecto permitió aplicar conceptos fundamentales del desarrollo frontend como el uso de componentes, manejo de estado, navegación entre páginas y diseño responsivo.
________________________________________
Objetivo del proyecto
Desarrollar una aplicación web interactiva utilizando React.js que permita simular el funcionamiento básico de una farmacia online, aplicando conceptos de desarrollo frontend como componentes reutilizables, manejo de estado, navegación entre páginas y diseño responsivo.
________________________________________
Tecnologías utilizadas
Las tecnologías utilizadas para el desarrollo de este proyecto fueron las siguientes:
React.js
Biblioteca de JavaScript utilizada para construir interfaces de usuario mediante componentes reutilizables.
JavaScript (ES6)
Lenguaje de programación principal utilizado para implementar la lógica de la aplicación.
React Router DOM
Herramienta utilizada para gestionar la navegación entre diferentes páginas dentro de la aplicación.
CSS3
Lenguaje utilizado para el diseño y estilización de la interfaz de usuario.
HTML5
Utilizado para la estructura base de la aplicación web.
Node.js y npm
Herramientas utilizadas para la gestión de dependencias y ejecución del proyecto en el entorno de desarrollo.
________________________________________
Arquitectura del sistema
La arquitectura de la aplicación FarmApp sigue un modelo de aplicación web basado en componentes. React permite dividir la interfaz en múltiples componentes reutilizables, lo que facilita el mantenimiento y escalabilidad del sistema.
La aplicación se compone de tres niveles principales:
Interfaz de usuario (UI)
Incluye todos los componentes visuales que interactúan con el usuario, como el menú de navegación, catálogo de medicamentos, carrito de compras y página de pago.
Lógica de la aplicación
Gestionada mediante React Hooks, principalmente el hook useState, que permite manejar el estado del carrito de compras y actualizar la interfaz de forma dinámica.
Sistema de navegación
Implementado mediante React Router DOM, que permite navegar entre las diferentes páginas sin recargar el sitio web.
Diagrama simplificado de arquitectura:
Usuario
↓
Interfaz Web (React)
↓
Componentes (Navbar, Home, Medicamentos, Carrito, Pago, Footer)
↓
Gestión de estado (React Hooks)
↓
Renderizado dinámico de la aplicación
________________________________________
Estructura del proyecto
La estructura del proyecto se organizó de manera modular para mantener el código limpio y fácil de mantener.
 ________________________________________
Funcionalidades del sistema
La aplicación FarmApp cuenta con las siguientes funcionalidades principales:
Página de inicio
Presenta un mensaje de bienvenida al usuario junto con información básica de la farmacia.
Catálogo de medicamentos
Permite visualizar diferentes medicamentos disponibles con su imagen, nombre y precio.
Buscador de medicamentos
Los usuarios pueden buscar medicamentos mediante un campo de búsqueda que filtra los resultados en tiempo real.
Carrito de compras
Los usuarios pueden agregar medicamentos al carrito para simular una compra.
Eliminación de productos
Dentro del carrito es posible eliminar productos seleccionados.
Cálculo automático del total
El sistema calcula automáticamente el valor total de los productos agregados al carrito.
Página de pago
Simula el proceso de pago de la compra.
Notificaciones visuales
Cuando un producto se agrega al carrito, el sistema muestra una notificación confirmando la acción.
________________________________________

Casos de uso
Caso de uso 1: Visualizar medicamentos
Actor: Usuario
Descripción:
El usuario accede al catálogo de medicamentos disponibles en la farmacia.
Flujo principal:
1.	El usuario ingresa a la aplicación.
2.	Selecciona la sección "Medicamentos".
3.	El sistema muestra el catálogo disponible.
________________________________________
Caso de uso 2: Buscar medicamento
Actor: Usuario
Descripción:
Permite buscar medicamentos específicos mediante el buscador.
Flujo principal:
1.	El usuario escribe el nombre de un medicamento en el buscador.
2.	El sistema filtra los resultados automáticamente.
3.	Se muestran los medicamentos coincidentes.
________________________________________
Caso de uso 3: Agregar medicamento al carrito
Actor: Usuario
Flujo principal:
1.	El usuario selecciona un medicamento.
2.	Presiona el botón "Comprar".
3.	El sistema agrega el medicamento al carrito.
4.	Se muestra una notificación confirmando la acción.
________________________________________

Caso de uso 4: Gestionar carrito
Actor: Usuario
Flujo principal:
1.	El usuario accede al carrito de compras.
2.	Visualiza los productos agregados.
3.	Puede eliminar productos del carrito.
4.	El sistema recalcula el total automáticamente.
________________________________________
Caso de uso 5: Realizar pago
Actor: Usuario
Flujo principal:
1.	El usuario accede al carrito.
2.	Presiona el botón "Ir a pagar".
3.	El sistema redirige a la página de pago.
________________________________________

Conclusiones
El desarrollo de FarmApp permitió aplicar diferentes conceptos fundamentales del desarrollo frontend utilizando React.js. Durante el desarrollo se implementaron componentes reutilizables, manejo de estado mediante React Hooks, navegación entre páginas utilizando React Router y diseño responsivo mediante CSS.
Este proyecto demuestra cómo es posible construir aplicaciones web modernas mediante herramientas actuales del desarrollo web, permitiendo crear interfaces interactivas y funcionales para los usuarios.
Además, el desarrollo de la aplicación permitió comprender la importancia de la organización del código, la reutilización de componentes y la creación de interfaces amigables que mejoran la experiencia del usuario.
________________________________________



Referencias
Facebook Inc. (2023). React: A JavaScript library for building user interfaces. https://react.dev
Mozilla Foundation. (2023). JavaScript documentation. MDN Web Docs. https://developer.mozilla.org
React Router Team. (2023). React Router documentation. https://reactrouter.com
OpenJS Foundation. (2023). Node.js documentation. https://nodejs.org
Mozilla Foundation. (2023). CSS: Cascading Style Sheets. MDN Web Docs. https://developer.mozilla.org

