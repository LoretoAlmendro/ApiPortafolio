import { region } from "../models/Region.js";

const getRegion = async (req, res) => {
    try {
        const regiones = await region.findAll();
        res.json(regiones);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createRegion = async (req, res) => {
    try {
        const { name } = req.body;
        const newRegion = await region.create({
            name
        });
        console.log(newRegion);
        res.json(newRegion);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { getRegion, createRegion };