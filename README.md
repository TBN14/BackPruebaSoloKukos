# PruebaSoloKukos

Proyecto creado para una prueba tecnica

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)

## Requisitos

- Node version LTS
- MongoDB Compass

## Instalación

### Front-end

Para instalar las dependencias del front-end, ejecuta el siguiente comando en la carpeta del front-end:

npm install

Para ejecutar el pryecto front-end, ejecuta el siguiente comando en la carpeta frontsolokukos:

npm start

### Back-end

Para instalar las dependencias del back-end, ejecuta el siguiente comando en la carpeta del backsolokukos:

npm install

Para ejecutar el pryecto back-end, ejecuta el siguiente comando en la carpeta backsolokukos:

npm run dev

## Uso

### Front-end

La aplicacion front cuenta con un login, una vista administrador que se encarga de: Agregar, editar y eliminar productos. Esta siempre muestra el listado de los productos existentes y por ultimo tenemos la vista usuario que solo muesra el listado de los productos

### Back-end

Para la parte del back se debe instalar mongo si es posible MongoDB Compass ayuda con un manejo de las tablas mas interactivo. Ya que mongo es una base de datos noSQL no hay manera de generar un modelo

**Pasos:**

- Ejecutar backsolokukos(npm run dev)
- Ingresar a MongoDB Compass
- Presionar Connect
- Presionar Database llamada 'PruebaSoloKukos'
- Presionar users
- Presionar ADD DATA
- Presionar Insert Document
- Pegas este JSON: {  "nombre": "Administrador",  "usuario": "ADMI",  "password": "123",  "rol": "ADMIN"}
- Presionar icono format se encuentra dentro de donde pegas el JSON
- Presionar Insert

  Realizando estos pasos ya puedes ejecutar el frontsolokukos(npm start) e ingresas en nombre de usuario:ADMI y contraseña:123

```bash
