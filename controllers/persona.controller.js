import { persona } from "../models/Persona.js";

const getPerson = async (req, res) => {
    try {
        const personas = await persona.findAll();
        res.json(personas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createPerson = async (req, res) => {
    try {
        const { nombre, apellido, edad, formacion, estudiante, RegionId } = req.body;
        const newPerson = await persona.create({
            nombre, apellido, edad, formacion, estudiante, RegionId
        });
        console.log(newPerson);
        res.json(newPerson);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updatePerson = async (req, res) => {
    try {

        const { nombre, apellido, edad, formacion, estudiante, RegionId } = req.body;
        const tables = await persona.findByPk(1);
        tables.number = number;
        await persona.save();
        res.json(persona);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        await persona.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500), json({ message: error.message });
    }
};

export { getPerson, createPerson, updatePerson, deletePerson };