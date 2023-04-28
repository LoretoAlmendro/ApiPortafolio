import { DataTypes, Model } from "sequelize";
// import { sequelize } from "../data/db_connectios.js";
import { sequelize } from "../db_connectios.js";
import {region} from "./Region.js";

class Persona extends Model { }

export const persona = Persona.init({
    id:{type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    nombre:{type: DataTypes.TEXT,
            allowNull: false,
    },
    apellido:{type: DataTypes.TEXT,
             allowNull: false,},
    mail:{type: DataTypes.TEXT,
                allowNull: false,},
    formacion:{type: DataTypes.TEXT,
            allowNull: false,},
    edad:{ type: DataTypes.TEXT,
             allowNull: false},
    comuna:{type: DataTypes.TEXT,
            allowNull: false },
    estudiante:{type: DataTypes.TEXT,
            allowNull: false},
  
},
    {sequelize, modelName: "Persona",
        timestamps: false,
        createdAt: false,
    } 

);

region.hasMany(persona, {
        foreignKey:"regionId",
        sourceKey: "id",
});
persona.belongsTo(region,{
        foreignKey:"regionId",
        targetKey:"id",
});
