import { comuna } from "../models/Comuna.js";

const getComuna = async (req, res) => {
    try {
        const Comunas = await comuna.findAll();
        res.json();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createComuna = async (req, res) => {
    try {
        const { nombre } = req.body;
        const newComuna = await comuna.create({
            nombre,
        });
        console.log(newComuna);
        res.json(newComuna);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { getComuna, createComuna };