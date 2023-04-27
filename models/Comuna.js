import { DataTypes, Model } from "sequelize";
// import { sequelize } from "../database/connection.js";
import { sequelize } from "../data/db_connectios.js";

class Comuna extends Model { }

export const comuna = Comuna.init({
    name: { type: DataTypes.TEXT },
},
    {
        sequelize, modelName: "Comunas",
        timestamps: false,
        createdAt: false,
    }
);