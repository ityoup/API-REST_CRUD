import express from "express";
const app = express();

app.use(express.urlencoded());

const data = {
    1: "Juan Carlos",
    2: "Miguel Lemus",
    3: "Ismael Morales",
    4: "Patricio Estrella"
}

export const mostrar = (req, res)=>{
    res.send(`Hola mundo`);   
}

export const bievenido = (req, res)=>{
    console.log(req.params.nombre);
    console.log(req.params.edad);
    res.send(`Hola ${req.params.nombre}, tienes ${req.params.edad} años`)
}

export const personas = (req, res)=>{
    let id = req.params.estudiante;
    console.log(id)
    const name = data[id];
    console.log(name)
    if (name == undefined){
        res.send("No existe esa persona dentro de la base de datos")
    }else{
        res.send(`La persona es ${name}, y esta en la posicion ${id}`)
    }

}

export const todos = (req, res)=>{
    res.send(data)
}

export const insertar = (req, res)=>{
    console.log(req.params.posicion);
   
    let id = req.params.posicion;
    let posicion = req.params.posicion;
    let nombre = req.params.nombre

    if(posicion + "" in data){
        res.send(`Ya existe un usuario con esa posicion`)

    }else{

        data[posicion] = `${nombre}`;
        
        res.send(`Usuario ${nombre} en la posicion ${posicion}`)
        res.redirect('/actualizar/new')
    }
    
}

export const actualizar = (req, res)=>{
    console.log(req.body.nombre);
    res.redirect('/actualizar/new');

    let nombre = req.body.nombre;
    let posicion = req.body.posicion;

    data[posicion] = `${nombre}`;

}

export const actualizarNew = (req, res)=>{
    res.render('index',{data});
}