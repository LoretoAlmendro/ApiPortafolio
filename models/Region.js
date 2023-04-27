import { DataTypes, Model } from "sequelize";
// import { sequelize } from "../data/db_connectios.js";
import { sequelize } from "../db_connectios.js";

class Region extends Model { }

export const region = Region.init({
    name: { type: DataTypes.TEXT },
},
    {
        sequelize, modelName: "Regions",
        timestamps: false,
        createdAt: false,
    }
);