import express  from "express"
import pg from "pg"
const app =express()
import dotenv from "dotenv";
// import { Sequelize } from "sequelize";
dotenv.config();
// import { sequelize } from "./db_connectios.js";
app.use(express.json());


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
    try{
        const elementId = req.params.id;
        const resultado = await region.findByPk(elementId).then(data => {
            if(!data) {
                return next(new Error('Registro no existe'));
            }
            return region.destroy({where:{id: elementId}});
        })
        .then(() => {
            console.log('Dato destruido');
            res.status(200).json({message: 'Success'});
        })
        .catch(err => {
            res.status(500).json({message: 'Fallo borrar dato'})
        })
    } catch (err) {
        next (err);
    }
        
});


app.post("/api/persona", async (req, res) => {
  try {
    const { nombre, apellido, mail, formacion, edad, comuna, regionId, estudiante } = req.body;
    const existeUsuario = await persona.findOne({where: {mail}})
    if (existeUsuario){
      return res.status(409).json ({error: 'El usuario ya existe'})
    }
    const nuevoUsuario = await persona.create({
      nombre, apellido, mail, formacion, edad, comuna, regionId, estudiante
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear la persona' });
  }
});


app.put("/api/actualizacion/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const { nombre, apellido, mail, formacion, edad, comuna, region, estudiante  } = req.body;
    const personaToUpdate = await persona.findOne({where:{id:id}});
    if (!personaToUpdate)  {
      return res.status(404).json({ message: 'Usuario no encontrada' });
    }
    await personaToUpdate.update({nombre, apellido, mail, formacion, edad, comuna, region, estudiante});
    res.json(personaToUpdate);
  } 
 
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al actualizar regiones' });
  }
});




