import express  from "express"
import pg from "pg"
import cors from "cors"
const app =express()
import dotenv from "dotenv";
// import { Sequelize } from "sequelize";
dotenv.config();
// import { sequelize } from "./db_connectios.js";
app.use(express.json());
app.use(cors({
  origin: '*'
}));


//puerto

async function main() {
  try {
    await sequelize.sync()
    app.listen(4001);
    console.log('Servido arriba puerto 4001');
  } catch (error) {
    console.error("Onable to connect to the database",error);
  }
}

main();

import {region} from './models/Region.js'; // Importar el modelo de la tabla "personas"
import {persona} from './models/Persona.js'
import { sequelize } from "./db_connectios.js";



app.get("/api/region", async (req, res) => {
  try {
    const personas = await persona.findAll({
      order: [['id', 'ASC']] // Ordenar por el campo "id" en orden ascendente
    });
    res.json(personas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener regiones' });
  }
});



app.delete("/api/region/:id", async (req,res) => {
  
    try {
      const { id } = req.params;
      await persona.destroy({
        where: {
          id,
        },
      });
      console.log('Producto eliminado con éxito')
      res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  
        
});


app.post("/api/persona", async (req, res) => {
  try {
    const { nombre, apellido, formacion, edad, comuna, estudiante, mail, regionId } = req.body;
    const existeUsuario = await persona.findOne({where: {mail}})
    if (existeUsuario){
      return res.status(409).json ({error: 'El usuario ya existe'})
    }
    const nuevoUsuario = await persona.create({
      nombre, apellido, formacion, edad, comuna, estudiante, mail, regionId
    })
    console.log(nuevoUsuario)
    res.json(nuevoUsuario)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear la persona' });
  }
});


app.put("/api/actualizacion/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, formacion, edad, comuna, estudiante, mail, regionId} = req.body;
    const personas = await persona.findByPk(id);
   personas.nombre = nombre;
   personas.apellido = apellido;
   personas.formacion = formacion;
   personas.edad = edad;
   personas.comuna = comuna;
   personas.estudiante = estudiante;
   personas.mail = mail;
   personas.regionId = regionId;
    await personas.save();
    res.json (personas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});




