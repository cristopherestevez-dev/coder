# React Coder - E-commerce con Firebase

Este proyecto es un **carrito de compras** desarrollado en **React** y conectado a **Firebase Firestore** para la gestión de productos y órdenes. Permite:

- Visualizar productos por categoría.
- Agregar productos al carrito y modificar cantidades.
- Completar un **checkout** con datos del comprador.
- Guardar órdenes en Firebase con un ID único.
- Vaciar el carrito y reiniciar el formulario de checkout.

---

## 📂 Estructura del proyecto

```text
├─ node_modules/
├─ public/
├─ src/
│  ├─ assets/                # Archivos estáticos (imágenes, iconos)
│  ├─ components/            # Componentes de React
│  │   ├─ CartView.jsx
│  │   ├─ CartWidget.jsx
│  │   ├─ FormCheckout.jsx
│  │   ├─ Item.jsx
│  │   ├─ ItemDetail.jsx
│  │   ├─ ItemDetailContainer.jsx
│  │   └─ ItemListContainer.jsx
│  ├─ context/
│  │   └─ cartContext.jsx    # Contexto del carrito
│  ├─ data/
│  │   ├─ firebase.js        # Inicialización de Firebase y funciones CRUD
│  │   └─ productos.json     # Productos iniciales
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ vite.config.js
└─ README.md
⚡ Tecnologías utilizadas
React 18

Firebase Firestore

React Context API para el manejo del carrito

JavaScript ES6+

CSS para estilos básicos

🚀 Cómo inicializar el proyecto
Clonar el repositorio:

git clone https://github.com/cristopherestevez-dev/coder.git

Instalar dependencias:

npm install

Configurar Firebase:

Crea un proyecto en Firebase.

Habilita Firestore Database.

Copia la configuración en src/data/firebase.js:

js

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
Para pruebas, reglas de seguridad:

js

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
Ejecutar la aplicación:

npm start

La app se abrirá en http://localhost:3000

📌 Funcionalidades principales

Listado de productos: obtener todos los productos o filtrarlos por categoría.

Carrito dinámico: agregar, eliminar y modificar cantidades de productos.

Checkout: enviar los datos del comprador, calcular total y guardar la orden en Firestore.

Confirmación de orden: muestra el ID de la orden generada por Firebase.

Vaciar carrito: botón para limpiar todos los productos del carrito.

📝 Notas adicionales
Los productos iniciales están en productos.json. Se pueden subir a Firebase con la función subirProducts() incluida en firebase.js.

La función createOrder() se encarga de generar la orden en Firestore y devuelve el ID único.

La UI se puede mejorar agregando estilos CSS, librerías de componentes o animaciones.

💻 Autor
Cristopher Estevez