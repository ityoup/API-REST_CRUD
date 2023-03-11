import express, { urlencoded } from "express";
import ruta from "./routes/rutas.routes.js";
import ejs from "ejs";
const app = express();
const port = 3000;
app.use(express.urlencoded());
app.set('view engine', 'ejs')
app.use(ruta)



app.listen(`${port}`);