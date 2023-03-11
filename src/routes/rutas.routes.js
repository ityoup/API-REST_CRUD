import { Router } from "express";
const ruta = Router();



import { mostrar, bievenido, personas, todos, insertar, actualizar, actualizarNew } from "../controllers/rutas.controller.js";

ruta.get('/hola', mostrar);

ruta.get('/bienvenido/:nombre/:edad', bievenido);

ruta.get('/personas/:estudiante', personas)

ruta.get('/todos', actualizarNew);

ruta.get('/json', todos)

ruta.get('/insertar/:posicion/:nombre', insertar)

ruta.post('/actualizar', actualizar)

ruta.get('/actualizar/new', actualizarNew)

export default ruta;